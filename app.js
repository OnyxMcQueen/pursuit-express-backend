const express = require('express');
const data = require('./data.json');
const app = express();
const cors = require('cors');

const usersController = require('./usersController');

app.use(
    cors({
        origin: "*",
    })
);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, " 
    )

    next();
})


app.get('/', (request, response) => {
    response.send('Hellooo this is the most basic route!')
})

//create controller

app.use('/users', usersController);

module.exports = app;