App.Views.ListEventView = Backbone.View.extend({
  
  initialize: function() {
    this.myTemplate = Handlebars.compile($("#my-events-template").html());
    // this.listenTo(this.model, "reset", this.render);
    // this.listenTo(this.model, "add", this.render);
    this.render();
  },

  render: function() {
    console.log("Render Single View");  
    this.$el.html( this.myTemplate(this.model.toJSON() ));
  },

  events: {
    "click #bar-events": "showMap"
  }

});
