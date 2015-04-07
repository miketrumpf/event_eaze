var App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {}
};

$(function() {
  console.log('Loaded, bro.');

  App.navigation = new App.Views.Navigation();

  App.event = new App.Models.Event;
  App.events = new App.Collections.Events;
  App.eventsView = new App.Views.Events({collection: App.events});
  //App.events.fetch();

  App.bars = new App.Collections.Bars;
  App.barsView = new App.Views.Bars({ collection: App.bars });
  // App.bars.fetch(); 

  App.myEvents = new App.Collections.MyEvents;
  App.myEventsView = new App.Views.MyEventsView({ collection: App.myEvents });
  App.myEvents.fetch();


  // App.map = new App.Models.Map;
  // App.maps = new App.Collections.Maps;
  // App.mapView = new App.Views.MapView({collection: App.maps});


  //App.map = new App.Collections.MyEvents;
  //App.mapView = new App.Views.MapView();
  //App.mapView.initialize();

  //google.maps.event.addDomListener(window, "load", initialize);

});
