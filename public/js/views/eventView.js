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
    "click #show-bars": "seachForBars",
    "click #more-info": "getFullEventInfo",
    "click #save-event": "callSaveEvent",
    "click .less-info": "getLessEventInfo"
  },

 

  seachForBars: function() {
    
    //Deletes the single event view
    this.$el.empty();
    
    //replaces with single event detailed view
    var data = this.model.toJSON()
    var compiledTemplate = this.singleEventTemplate(data);
    this.$el.append(compiledTemplate)

    App.bars.fetch();

  },

  callSaveEvent: function() {
    
    var events = this.model.attributes;

    var eventsModel = ({title: events.title, city_name: events.city_name, start_time: events.start_time, venue_name: events.venue_name, venue_addess: events.venue_address, description: events.description, latitude: events.latitude, longitude: events.longitude}); 

    App.event = new App.Models.Event;
    App.event.save(eventsModel).always(function() {
      App.bars.fetch();
    });

    console.log(this.model.id);

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

  }

});
