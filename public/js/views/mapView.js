App.Views.MapView = Backbone.View.extend({

  el: ".map",
  initialize: function () {
    console.log("map view created")

    var mapOptions = {
      zoom: 5,
      center: {
        lat: 40.7411,
        lng: -73.9897
      }
    }

    var map = new google.maps.Map(this.el, mapOptions);

    var latitude = parseFloat(App.myEvents.models[0].attributes.latitude);
    var latNum = eval(latitude);

    var longitude = parseInt(App.myEvents.models[0].attributes.longitude);
    var longNum = eval(longitude)

    console.log(latNum);
    //console.log(longitude);

    var marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: { lat: latNum, lng: longNum }
    });
    marker.setMap(map)

    //console.log(9898);
 }

});