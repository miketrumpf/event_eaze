App.Views.Navigation = Backbone.View.extend({
  el: "#nav",

  initialize: function() {
    //console.log("Nav View");
    // this.navTemplate = Handlebars.compile($("#navigation").html() );
    this.template = function() {
      return $("#navigation").html();
    };
    this.render();
  },

  events: {
    "click #select": "searchForEvents",
    "click #my-events": "seeMyEvents"
  },

  render: function() {
    // var template = this.navTemplate();
    this.$el.html(this.template());
  },

  searchForEvents: function() {
    // var resultsDiv = document.getElementById("bar-results");
    // resultsDiv.removeAtributes("style");
    $("#main").empty();
    $("#bar-results").css({
      "overflow": "scroll",
      "background-color": "white"
    });       
    $("#bar-results").empty(); 

  // App.event = new App.Models.Event;
  // App.events = new App.Collections.Events;
  // App.eventsView = new App.Views.Events({collection: App.events});
    App.events.fetch();
  },

  seeMyEvents: function() {
    $("#main").empty();
    $("#bar-results").empty();

    App.listEvents = new App.Collections.MyEvents;
    App.listEventsView = new App.Views.ListEventsView({ collection: App.listEvents });
    App.listEvents.fetch();
  }

});











