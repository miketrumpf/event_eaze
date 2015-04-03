App.Views.Event = Backbone.View.extend({
  className: "event",


  initialize: function() {
    //console.log("New Event view created")
    // this.listenTo(this.model, "change", this.render);
    this.eventTemplate = Handlebars.compile($("#event-list").html());
    // $("#main").on("click", ".event", this.getFullEventInfo(this))
    this.render();
  },

  render: function() {
    var data = this.model.toJSON();
    var compiledTemplate = this.eventTemplate(data);
    this.$el.append(compiledTemplate);
    
  },

  events: {
    "click #selected-event": "seachForBars",
    "click #more-info": "getFullEventInfo",
    "click #save-event": "callSaveEvent"
  },

  seachForBars: function() {
    //console.log(this.model.attributes.title);
    App.bars.fetch();

  },

  callSaveEvent: function() {
    var events = this.model.attributes;

    var eventsModel = ({title: events.title, city_name: events.city_name, start_time: events.start_time, venue_name: events.venue_name, venue_addess: events.venue_address, description: events.description, latitude: events.latitude, longitude: events.longitude}); 

    App.event = new App.Models.Event;
    App.event.save(eventsModel);
  },

  getFullEventInfo: function() {
    console.log("clicked") 
    var newEventModalView = new App.Views.EventModal({model: this.model})
  }

});