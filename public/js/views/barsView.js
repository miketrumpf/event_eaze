App.Views.Bars = Backbone.View.extend({

  el: "#main",

  initialize: function() {
    this.listenTo(this.collection, "reset", this.renderOne);
    this.listenTo(this.collection, "add", this.renderOne);
    this.renderAll();
  },

  renderAll: function() {
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(one) {
    console.log(one);
    var newBarView = new App.Views.Bar ({ model: one });
    this.$el.append(newBarView.el);
  }


}); 

