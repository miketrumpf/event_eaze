var App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {}
};

$(function() {
  console.log('Loaded, bro.');

  App.bars = new App.Collections.Bars;
  App.barsView = new App.Views.Bars({ collection: App.bars });
  App.bars.fetch();

});
