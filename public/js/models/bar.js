App.Models.Bar = Backbone.Model.extend({

  initialize: function() {
    console.log("Bar Models Created");
  },

  urlRoot: "/search_for_bars"

});