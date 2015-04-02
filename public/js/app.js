var App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {}
};

$(function() {
  console.log('Loaded, bro.');

  App.events = new App.Collections.Events;
  App.eventsView = new App.Views.Events({collection: App.events});
  //App.events.fetch();

  App.bars = new App.Collections.Bars;
  App.barsView = new App.Views.Bars({ collection: App.bars });
  // App.bars.fetch(); 

  App.navigation = new App.Views.Navigation();

});
