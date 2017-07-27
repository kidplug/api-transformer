import express from "express";
let router = express.Router();

router.use('/search', require('./search'));

module.exports = router;