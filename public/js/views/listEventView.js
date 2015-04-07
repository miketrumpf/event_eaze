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
    "click #delete": "deleteEvent"
  },

  showMap: function() {
    console.log("showMap clicked")
    var model = this.model.attributes
    var newMap = new App.Views.MapView({model: model})
  },

  deleteEvent: function() {
    this.model.destroy(this.model.id);
    }

});
