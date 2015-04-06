// App.Views.mapsView = Backbone.View.extend({

// var stockholm = new google.maps.LatLng(40.7308580, -73.9870210);
// var parliament = new google.maps.LatLng(40.7317183, -73.9855539);
// var marker;
// var map;

// initialize: function() {
//   var mapOptions = {
//     zoom: 13,
//     center: stockholm
//   };

//   map = new google.maps.Map(document.getElementById('map-canvas'),
//           mapOptions);

//   marker = new google.maps.Marker({
//     map:map,
//     draggable:true,
//     animation: google.maps.Animation.DROP,
//     position: parliament
//   });
//   google.maps.event.addListener(marker, 'click', toggleBounce);
// },

// toggleBounce: function() {

//   if (marker.getAnimation() != null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }

// google.maps.event.addDomListener(window, 'load', initialize);

// });