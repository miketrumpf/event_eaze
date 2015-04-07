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

    "click #bar-map": "showMap"
  },

  showMap: function() {
    console.log("showMap clicked")
    $("#bar-results").empty();
    var model = this.model.attributes;
    var newMap = new App.Views.MapView({
      model: model
    });
  }

});
