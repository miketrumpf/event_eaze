App.Views.ListEventsView = Backbone.View.extend({  
  
  el: "#main",

  initialize: function() {
    this.listenTo(this.collection, "add", this.renderOne);
    // this.listenTo(this.collection, "reset", this.renderAll);
  },

  // renderAll: function() {
  //   this.$el.empty();
  //   this.collection.each(this.renderOne, this);
  // },

  renderOne: function(one) {
    var newListEventView = new App.Views.ListEventView({ model: one });
    this.$el.append(newListEventView.el);
  }
}); 
