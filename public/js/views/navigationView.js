App.Views.Navigation = Backbone.View.extend({
  el: "#nav",

  initialize: function() {
    //console.log("Nav View");
    // this.navTemplate = Handlebars.compile($("#navigation").html() );
    this.template = function() {
      return $("#navigation").html();
    };
    this.render();
  },

  events: {
    "click #select": "searchForEvents"
  },

  render: function() {
    // var template = this.navTemplate();
    this.$el.html(this.template());
  },

  searchForEvents: function() {
    App.events.fetch();
  }

});











