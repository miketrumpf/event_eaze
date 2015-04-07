App.Views.MapView = Backbone.View.extend({

    el: '#bar-results',
    
    initialize: function(){
      this.$el.empty()

      var mapOptions =  {
        zoom: 15, 
        center: {lat: parseFloat(this.model.latitude), lng: parseFloat(this.model.longitude)},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

      this.collection = this.model.bars
      this.map = new google.maps.Map(this.el, mapOptions);
      this.render();

    },

    render: function(){
      var marker = new google.maps.Marker({
        map: this.map,
        position: {lat: parseFloat(this.model.latitude), lng: parseFloat(this.model.longitude)},
        animation: google.maps.Animation.DROP,
        // icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        // content: this.model.title
      });

      var infoWindow = new google.maps.InfoWindow({

        content: this.model.title + "<p></p>" + "Venue: " + this.model.venue_name + "<p></p>" + this.model.start_time
      })
      google.maps.event.addListener(marker, "click", function(){
        infoWindow.open(this.map, marker)
      })

      this.collection.forEach(this.renderBarMarkers.bind(this))

    },

    renderBarMarkers: function(bar){
      var marker = new google.maps.Marker({
        map: this.map,
        position: {lat: parseFloat(bar.latitude), lng: parseFloat(bar.longitude)},
        animation: google.maps.Animation.DROP,
        icon: "http://upload.wikimedia.org/wikipedia/commons/6/63/Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Bar_%E2%80%93_Restaurants_%26_Hotels_%E2%80%93_White.png"
      });
      var infoWindow = new google.maps.InfoWindow({

        content: bar.name + "<p></p>" + "Rating: " + bar.rating + "<p></p>" + bar.hours
      })
      google.maps.event.addListener(marker, "click", function(){
        infoWindow.open(this.map, marker)
      })
      
    },

});