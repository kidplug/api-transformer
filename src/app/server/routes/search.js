import express from "express";
import axios from "axios";
import jmespath from "jmespath";
const router = express.Router();

router.get('/:type', (req, res) => {

    const type = req.params.type;

    axios.get('https://swapi.co/api/' + type)
        .then((response) => {

            let transformed = {};

            switch(type) {
                case "people":
                    transformed = jmespath.search(response.data, "results[*].{fullName: name, weight: mass, height : height, movies : films }");
                    break;
                case "starships":
                    transformed = jmespath.search(response.data, "results[*].{shipName: name, model: model, maxPassengers: passengers, movies : films }");
                    break;
                default:
                    res.status(400).send({ error : "Bad API request, endpoint not found." });
                    break;
            }
            res.send({original: response.data, transformed: transformed });
        })
        .catch( (error) => {
            res.status(400).send({ error : "Bad API request" });
        });
});

module.exports = router;