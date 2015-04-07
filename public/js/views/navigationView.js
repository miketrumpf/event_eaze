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
    $("#bar-results").css({
      "overflow": "scroll",
      "background-color": "white"
    });       
    $("#bar-results").empty(); 

    App.events.fetch();
  },

  seeMyEvents: function() {
    $("#main").empty();
    $("#bar-results").empty();
    App.listEvents.fetch();
  }

});











