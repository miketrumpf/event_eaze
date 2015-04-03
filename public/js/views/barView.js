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
    "click #more-bar-info": "getFullBarInfo"
  },

  getFullBarInfo: function() {
    console.log("clicked bar info")

    var newBarModalView = new App.Views.BarModal({model: this.model})
  
  }

}); 

