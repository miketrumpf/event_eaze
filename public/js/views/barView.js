App.Views.Bar = Backbone.View.extend({

  initialize: function() {
    this.barTemplate = Handlebars.compile($("#bar-list").html());
    this.render();
  },

  render: function() {
    //this.$el.empty();

    var data = this.model.toJSON();
    var compiledTemplate = this.barTemplate(data); 
    this.$el.append(compiledTemplate);

  }

}); 

