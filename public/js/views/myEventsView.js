App.Views.MyEventsView = Backbone.View.extend({  
  el: "#saved",

  initialize: function() {
    this.listenTo(this.collection, "reset", this.renderAll);
    this.listenTo(this.collection, "add", this.renderOne);
    //this.renderAll();
  },

  renderAll: function() {
    $("#main").empty();
    $("#bar-results").empty();
    // console.log("render All");
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(one) {
    //console.log(one.attributes.latitude);
    var newMyEventView = new App.Views.MyEventView({ model: one });
    this.$el.append(newMyEventView.el);
  }
}); 
