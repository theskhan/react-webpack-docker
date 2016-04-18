'use strict';

const express = require('express');

// Constants
const PORT = 9001;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('API Server \n');
});

app.get('/info', function (req, res) {
    res.send("This is sample info");
})

app.get('/info1', function (req, res) {
    res.send("This is sample info 1");
})

app.get('/info2', function (req, res) {
    res.send("This is sample info 2");
})

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);