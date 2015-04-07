App.Views.Events = Backbone.View.extend({
  el: "#main",


  initialize: function() {
    //console.log("Events collection view created");
    this.listenTo(this.collection, "reset", this.renderAll);
    this.listenTo(this.collection, "add", this.renderAll);
    this.listenTo(this.collection, "add", this.searhForBars);
  },

  renderAll: function() {
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(one) {
    var newEventView = new App.Views.Event({model: one});
    this.$el.append(newEventView.el);
  }

});