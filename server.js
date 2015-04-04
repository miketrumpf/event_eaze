//Libraries
var express     = require("express");
var path        = require("path");
var logger      = require("morgan");
var bodyParser  = require("body-parser");
var request     = require("request");
var models      = require("./models");

//Models 
var Event = models.events;
var Bar = models.bars;
//var Plan = models.plans; -> Join Table

//Express 
var app = express();

//Require env
require("dotenv").load();

//Middleware 
app.use(logger("dev"));
app.use(bodyParser());
app.use(express.static(__dirname + "/public"));

//Routes
//----

//EVENTFUL ROUTES

//Get Events by City, Date, and Keyword.

//Route made before index has been created.  Need to add var params later.
app.get("/search_for_events", function (req, res) {
  // var cityParams = req[0].query;
  // var timeParams = req[1].query;
  // var keywordParams = req[2].query;
  var query = req.query;
  query.app_key = "MMVmB6tzJdSHNQR6";

  request({
    uri: "http://api.eventful.com/json/events/search",
    method: "GET",
    json: true,
    qs: query
      // location: "New York",
      // date: "Future",
      // keywords: "Rap"
  }, function(error, response, body) {
    
    res.send(body.events.event)
    //console.log(body.events.event);
});

//route to create event
app.post("/events", function (req, res) {
  var events = req.body;
  Event.create(events)
       .then(function(newEntry) {
         res.send(newEntry)
         });
     })
});

//route to get list of events
app.get("/events", function (req, res) {
  Event.findAll()
       .then(function(events) {
          res.send(events);
       });
});

//route to get specific event
app.get("/events/:id", function (req, res) {
  Event.findOne(req.params.id)
       .then(function(oneEvent) {
        res.send(oneEvent);
       });
});

//route to delete event
app.delete("/events/:id", function (req, res) {
  Event.findOne(req.params.id)
       .then(function(oneEvent) {
         oneEvent.destroy()
                 .then(function() {
                   res.send(oneEvent);
                 });
       });
});


//FOURSQUARE ROUTES
//Get restaurants by Show Objects Latitude plus Longitude.  (ll parameter)

//Route made before index has been created.  
app.get("/search_for_bars", function (req, res) {
  // var latLong = this.venue.lat + ", " + this.venue.long
  var llToSearch = req.query['ll'];
  request({
    uri: "https://api.foursquare.com/v2/venues/explore",
    method: "GET",
    json: true,
     qs: { 
      //ll: "40.7,-74",
      ll: llToSearch,
      section: "food",
      client_id: process.env.FOURSQUARE_API_CLIENT_KEY,
      client_secret: process.env.FOURSQUARE_API_SECRET_KEY,
      v: "20150401"
    }
  }, function(error, response, body) {
    var arrayOfBars = [];
   for (var i =0; i < 10; i++) {
    var currentVenue = body.response.groups[0].items[i];
    console.log(currentVenue)
    arrayOfBars.push(currentVenue)
    
   } 
      res.send(arrayOfBars)

  })
  //console.log(request)
});


app.post("/bars", function (req, res) {
  var bars = req.body;
  Bar.create(bars)
      .then(function(newEntry) {
        res.send(newEntry)
         });
     //})
});

app.get("/bars", function (req, res) {
  Bar.findAll()
       .then(function(bars) {
          res.send(bars);
       });
});

//----------------
//Events <-> Bars
//----------------

app.put("/events/:id/add_bar", function (req, res) {

  var eventId = req.params.id;
  var barId = req.body.bar_id;

  Event.findOne(eventId)
       .then(function(events) {
         Bar.findOne(barId)
            .then(function(bar) {
              post.addBar(bar);
              res.send("Linked!");
            });
       });
});

app.put("/events/:id/remove_bar", function (req, res) {

  var eventId = req.params.id;
  var barId = req.body.bar_id;

  Event.findOne(eventId)
       .then(function(events) {
         Bar.findOne(barId)
            .then(function(bar) {
              post.removeBar(bar);
              res.send("Yay");
            });
       });
});

//Server
app.listen(3000, function() {
  console.log("Running!");
});





