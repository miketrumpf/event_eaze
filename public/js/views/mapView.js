App.Views.MapView = Backbone.View.extend({

  el: ".map",
  initialize: function () {
    console.log("map view created")

    var mapOptions = {
      zoom: 15,
      center: {
        lat: 40.7411,
        lng: -73.9897
      }
    }

    var map = new google.maps.Map(this.el, mapOptions);

    var marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,

    position: { lat: 40.7411, lng: -73.9897 }
    });
   
    marker.setMap(map)
 }

});