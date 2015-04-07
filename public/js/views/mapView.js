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
        content: this.model.title
      });
      var infoWindow = new google.maps.InfoWindow({
        content: this.model.title
      })
      google.maps.event.addListener(marker, "click", function(){
        infoWindow.open(this.map, marker)
      })
      this.collection.forEach(this.renderBarMarkers.bind(this))

    },

    renderBarMarkers: function(bar){
      var marker = new google.maps.Marker({
        map: this.map,
        position: {lat: parseFloat(bar.latitude), lng: parseFloat(bar.longitude)}
      })
    }

});