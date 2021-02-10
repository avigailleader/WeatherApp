const weatherRouter=require('./routes/api');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 4000;
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(bodyParser.json());

app.use('/api',weatherRouter)

mongoose.connect('mongodb+srv://avigail:avid0965@weather.cqcqp.mongodb.net/Weather?retryWrites=true&w=majority', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});