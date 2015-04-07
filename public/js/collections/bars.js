App.Collections.Bars = Backbone.Collection.extend({
  
  initialize: function() {
    console.log("Bars Collection created");
  },

  url:"/search_for_bars",

  model: App.Models.Bar
  
});