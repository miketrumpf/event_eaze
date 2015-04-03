App.Views.BarModal = Backbone.View.extend({
  el:"#modal",

  initialize: function() {
    console.log("Bar Modal view created");
    this.template = Handlebars.compile($("#bar-modal").html());
    this.render();
  },

  events: {
    "click .close-modal": "hide"
  },

  hide: function() {
    this.$el.hide();
  },

  show: function() {
    this.$el.show();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.show();
  }
  
})