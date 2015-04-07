App.Views.Bar = Backbone.View.extend({

  initialize: function() {
    this.barTemplate = Handlebars.compile($("#bar-list").html());
    this.render();
  },

  render: function() {
    var data = this.model.toJSON();
    var compiledTemplate = this.barTemplate(data); 
    this.$el.append(compiledTemplate);

  },

  events: {
    "click #more-bar-info": "getFullBarInfo",
    "click #save-bar": "saveBar"
  },

  getFullBarInfo: function() {
    console.log("clicked bar info")

    var newBarModalView = new App.Views.BarModal({model: this.model})
  
  },

  saveBar: function(model) {
    var lastId = App.myEvents.last().id;
    var lastIdPlus = lastId + 1;
    console.log(lastIdPlus);

    var bars = this.model.toJSON();

    var barsModel = ({name: bars.venue.name, rating: bars.venue.rating, text: bars.tips[0].text, hours: bars.venue.hours.status, streetAddress: bars.venue.location.address, cityAddress: bars.venue.location.city, latitude: bars.venue.location.lat, longitude: bars.venue.location.lng, event_id: lastIdPlus }); //event ID!

    App.bars = new App.Models.Bar;
    App.bars.save(barsModel);

    alert("Bar saved! :-)");
    //App.myEvents.fetch();
  }

}); 

