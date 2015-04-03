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
    "click #show-bars": "seachForBars",
    "click #more-info": "getFullEventInfo"
  },

  seachForBars: function() {
    var event = this.model.attributes;
    debugger

    // event.set({title: this.title, city_name: "this.city_name", start_time: 10, venue_name: "this.venue_name", venue_addess: "this.venue_address", description: "this.description", latitude: "this.latitude", longitude: "this.longitude"});
    App.bars.fetch();

  },

    getFullEventInfo: function() {
    console.log("clicked")
    
    var newEventModalView = new App.Views.EventModal({model: this.model})
    

  }

});
