App.Collections.Events = Backbone.Collection.extend({
  initialize: function() {
    //console.log("Events Collection created")
  },

  url: function() {    
    var city = encodeURI($("#city").val());
    var date = encodeURI($("#date").val());
    var keyword = encodeURI($("#keyword").val());
      return "/search_for_events?" + "&location=" + city + "&date=" + date + "&keywords=" + keyword
    },
  
  model: App.Models.Event,

});