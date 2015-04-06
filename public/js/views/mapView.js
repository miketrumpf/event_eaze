App.Views.MapView = Backbone.View.extend ({

  // initialize: function(){
  // },

  // initMap: function () {
  //   myLatlng = new google.maps.LatLng(51.903679, -8.468274);
  //   mapOptions = {
  //       center: myLatlng,
  //       zoom: 12,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   map = new goo1gle.maps.Map(this.$el.find('#map-canvas')[0],mapOptions);
  //   marker = new google.maps.Marker({
  //       position: myLatlng,
  //       map: map,
  //       title: 'Christians Brothers College Cork'
  //   });
  // }

  // initialize: function() {
  //   var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  //   var mapOptions = {
  //     zoom: 4,
  //     center: myLatlng
  //   }
  //   var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  //   var marker = new google.maps.Marker({
  //       position: myLatlng,
  //       map: map,
  //       title: 'Hello World!'
  //   });
  //   console.log("chegou aqui!");
  // }

       
         el: $("#map_canvas"),
                         
         initialize: function() {
             
             // Roughly the center of the United States
             var latlng = new google.maps.LatLng(35.5, -100);
             
             // Google Maps Options
             var myOptions = {
                 zoom: 5,
                 center: latlng,
                 mapTypeControl: false,
                 navigationControlOptions: {
                 style: google.maps.NavigationControlStyle.ANDROID
                 },
                 mapTypeId: google.maps.MapTypeId.ROADMAP,
                 streetViewControl: false,
                 styles: [{featureType:"administrative",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",stylers:[{hue:"#0000ff"},{lightness:-84},{visibility:"off"}]},{featureType:"water",stylers:[{visibility:"on"},{saturation:-61},{lightness:-63}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape",stylers:[{visibility:"off"}]},{featureType:"administrative",stylers:[{visibility:"off"}]},{},{}]
               
             };
             
             // Force the height of the map to fit the window
             this.$el.height($(window).height() - $("header").height());
             
             // Add the Google Map to the page
             var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
             
             // Bind an event to add tweets from the collection
             
             // this.collection.bind('add', function(model) {
                                        
             //     // Stores the tweet's location
             //     var position = new google.maps.LatLng( model.get("geo").coordinates[0], model.get("geo").coordinates[1]); 
                   
                 // Creates the marker
                 // Uncomment the 'icon' property to enable sexy markers. Get the icon Github repo:
                 // https://github.com/nhunzaker/twittermap/tree/master/images
                 // var marker = new google.maps.Marker({                         
                 //   position: position,
                 //   map: map,
                 //   title: model.from_user,                  
                 //   //icon: 'images/marker.png', 
                 //   description: model.text
                 // });
                 
                 
             //});
         }


      //-- End of Map view
 

});