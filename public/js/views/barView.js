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

  saveBar: function() {
    console.log(this.model);

    var bars = this.model.attributes;

    var barsModel = ({name: bars.venue.name, rating: bars.venue.rating, text: bars.tips[0].text, hours: bars.venue.hours.status, streetAddress: bars.venue.location.address, cityAddress: bars.venue.location.city});

    App.bars = new App.Models.Bar;
    App.bars.save(barsModel);
  }

}); 

