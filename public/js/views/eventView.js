App.Views.Event = Backbone.View.extend({
  className: "event",


  initialize: function() {
    //console.log("New Event view created")
    // this.listenTo(this.model, "change", this.render);

    this.eventTemplate = Handlebars.compile($("#event-list").html());
    this.singleEventTemplate= Handlebars.compile($("#single-event").html());
    // $("#main").on("click", ".event", this.getFullEventInfo(this))
    this.render();


  },

  render: function() {

    var data = this.model.toJSON();
    var compiledTemplate = this.eventTemplate(data);
    this.$el.append(compiledTemplate);
  },


  events: {
    "click #more-info": "getFullEventInfo",
    "click #save-event": "callSaveEvent",
    "click .less-info": "getLessEventInfo"
  },



//   seachForBars: function() {
//     this.$el.empty();
//     var data = this.model.toJSON()
//     var compiledTemplate = this.singleEventTemplate(data);
//     this.$el.html(compiledTemplate)
// // debugger
//     var longitude = this.model.attributes.longitude;
//     var latitude = this.model.attributes.latitude;
//     var longLat = (latitude + "," + longitude);

//     console.log(longLat);

//     App.bars.url = "/search_for_bars?&ll=" +longLat;
//     App.bars.fetch();

//   },

  callSaveEvent: function() {

    this.$el.empty();
    
    var events = this.model.attributes;

    var eventsModel = ({title: events.title, city_name: events.city_name, start_time: events.start_time, venue_name: events.venue_name, venue_addess: events.venue_address, description: events.description, latitude: events.latitude, longitude: events.longitude}); 

    var data = this.model.toJSON()
    var compiledTemplate = this.singleEventTemplate(data);
    this.$el.html(compiledTemplate)
// debugger
    var longitude = this.model.attributes.longitude;
    var latitude = this.model.attributes.latitude;
    var longLat = (latitude + "," + longitude);

    console.log(longLat);

    App.bars.url = "/search_for_bars?&ll=" +longLat;
    App.bars.fetch();

    App.event = new App.Models.Event;
    App.event.save(eventsModel).always(function(){
      console.log("got here");
      App.bars.fetch()

    })
  },

  getFullEventInfo: function() {
    console.log("clicked") 
    var newEventModalView = new App.Views.EventModal({model: this.model})

  },

  getLessEventInfo: function() {

    this.$el.empty();
    var data = this.model.toJSON();
    var compiledTemplate = this.eventTemplate(data);
    this.$el.append(compiledTemplate);

  },



});
