//Dependencies
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//Express
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({  extended: true }));
app.use(bodyParser.json());


//Routes
app.use('/api', require('./routes/api'));


//Handle 404s 
app.use('*', (req,res) => {
   res.status(404).send('404: Not Found');
});

//Start Server
app.listen(3000, function() {
   console.log('api is running on port 3000');
});