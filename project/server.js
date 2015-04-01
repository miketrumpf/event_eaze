//Libraries
var express     = require("express");
var path        = require("path");
var logger      = require("morgan");
var bodyParser  = require("body-parser");
var request     = require("request");
//var models    = require("./models");

//Models 
//var Event = models.events;
//var Bar = models.bars;
//var Plan = models.plans; -> Join Table

//Express 
var app = express();

//Middleware 
app.use(logger("dev"));
app.use(bodyParser());
app.use(express.static(__dirname + "/public"));

//Routes
//----



//Server
app.listen(3000, function() {
  console.log("Running!");
});