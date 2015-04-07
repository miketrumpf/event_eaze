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
  App.myEvents.fetch();

  App.listEvents = new App.Collections.MyEvents;
  App.listEventsView = new App.Views.ListEventsView({ collection: App.listEvents });
  //App.listEvents.fetch();

});
