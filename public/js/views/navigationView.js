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
    App.events.fetch();
  },

  seeMyEvents: function() {
    //App.myEvents.fetch();
    // var viewAll = new App.Views.MyEventView();
    // viewAll.render();
    //App.myEvents.fetch();
    //App.myEventsView.renderAll();

    //App.mapView.initialize();
    // google.maps.event.addDomListener(window, 'load', App.mapView.initialize);
  }

});











