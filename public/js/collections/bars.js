App.Collections.Bars = Backbone.Collection.extend({
  
  initialize: function() {
    console.log("Bars Collection created");
  },

  url: function() {
    //console.log(this.model);
    var latitude = $("#lat").data("lat");
    var longitude = $("#long").data("long");
    var latLong = (latitude) + "," + (longitude);
    var string =  encodeURI(latLong);
    console.log(string);
    return "/search_for_bars?" + "&ll=" + string
    //  return "/search_for_bars"
  },
  //url: "/search_for_bars",

  model: App.Models.Bar
  
});