App.Views.EventModal = Backbone.View.extend({
  el: "#modal",

  initialize : function() {
    console.log("Event Modal view created");
    this.template = Handlebars.compile($("#event-modal").html());
    // this.render();
    this.listenTo(this.model, "change", this.render)
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
    debugger
    this.$el.html(this.template(this.model.toJSON()));
    this.show();
  }
})