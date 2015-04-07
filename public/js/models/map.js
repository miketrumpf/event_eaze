App.Models.Map = Backbone.Model.extend({

  defaults: {
     zoom: 15, 
     center: { lat: 40.7411, lng: -73.9897 },
     mapTypeId: google.maps.MapTypeId.ROADMAP
  }

});