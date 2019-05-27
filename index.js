/*jshint esversion: 6 */

const fs = require("fs");

var express = require('express');
var http = require('http');

// Create a service (the app object is just a callback).
var app = express();

// Create an HTTP service.
http.createServer(app).listen(80);

var energyUsed = 0;

var light1Usage = 12;
var light2Usage = 53;
var light3Usage = 32;
var light4Usage = 102;

//add the public files
app.get('/', function (req, res) {
    return res.sendFile("index.html", { root: __dirname });
});

app.get('/viewer', function (req, res) {
    return res.sendFile("viewer.html", { root: __dirname });
});

app.get('/usage', function (req, res) {
    return res.send("" + energyUsed);
});

//success and failed
app.get('/light1On', function (req, res) {
    energyUsed += light1Usage;
    res.sendStatus(200);
});
app.get('/light1Off', function (req, res) {
    energyUsed -= light1Usage;
    res.sendStatus(200);
});

//success and failed
app.get('/light2On', function (req, res) {
    energyUsed += light2Usage;
    res.sendStatus(200);
});
app.get('/light2Off', function (req, res) {
    energyUsed -= light2Usage;
    res.sendStatus(200);
});

//success and failed
app.get('/light3On', function (req, res) {
    energyUsed += light3Usage;
    res.sendStatus(200);
});
app.get('/light3Off', function (req, res) {
    energyUsed -= light3Usage;
    res.sendStatus(200);
});

//success and failed
app.get('/light4On', function (req, res) {
    energyUsed += light4Usage;
    res.sendStatus(200);
});
app.get('/light4Off', function (req, res) {
    energyUsed -= light4Usage;
    res.sendStatus(200);
});

app.get('/reset', function (req, res) {
    energyUsed = 0;
    res.sendStatus(200);
});