App.Collections.Events = Backbone.Collection.extend({
  initialize: function() {
    console.log("Events Collection created")
  },

  url: "search_for_events",
  
  model: App.Models.Event
});