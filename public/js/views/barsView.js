App.Views.Bars = Backbone.View.extend({

  el: "#bar-results",

  initialize: function() {
    this.listenTo(this.collection, "reset", this.renderAll);
    this.listenTo(this.collection, "add", this.renderAll);
  },

  renderAll: function() {
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(one) {
    var newBarView = new App.Views.Bar ({ model: one });
    this.$el.append(newBarView.el);
  }


}); 

