App.Collections.MyEvents = Backbone.Collection.extend({
  
  url: "/events",    
  model: App.Models.Event,
  
  initialize: function() {
  }

});