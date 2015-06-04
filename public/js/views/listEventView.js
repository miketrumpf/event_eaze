App.Views.ListEventView = Backbone.View.extend({
  
  initialize: function() {
    this.myTemplate = Handlebars.compile($("#my-events-template").html());
    this.render();
  },

  render: function() {
    console.log("Render Single View"); 
    this.$el.html( this.myTemplate(this.model.toJSON() ));
  },

  events: {

    "click #bar-map": "showMap",
    "click #delete": "delete"

  },

  showMap: function() {
    console.log("showMap clicked")
    $("#bar-results").empty();
    var model = this.model.attributes;
    var newMap = new App.Views.MapView({
      model: model
    });
  },

  delete: function() {
    
    eventId= this.model.id;

debugger

    $.ajax({
      method: "DELETE",
      url: "/events/" + eventId
    })
      .done(this.reRender);
  },

  reRender: function() {
    
    $("#main").empty();
    App.listEvents = new App.Collections.MyEvents;
    App.listEventsView = new App.Views.ListEventsView({ collection: App.listEvents });
    App.listEvents.fetch();
    debugger
    
  }


});
