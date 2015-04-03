App.Collections.Bars = Backbone.Collection.extend({
  
  initialize: function() {
    console.log("Bars Collection created");
  },

  url: function() {
    var latitude = $("#lat").data("lat");
    var longitude = $("#long").data("long");
    var latLong = (latitude) + "," + (longitude);
    var string =  encodeURI(latLong);
    console.log(string);
    return "/search_for_bars?" + "&ll=" + string
  },

  model: App.Models.Bar
  
});