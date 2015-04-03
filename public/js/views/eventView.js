App.Views.Event = Backbone.View.extend({
  className: "event",


  initialize: function() {
    console.log("New Event view created")
    // this.listenTo(this.model, "change", this.render);
    this.eventTemplate = Handlebars.compile($("#event-list").html());
    // $("#main").on("click", ".event", this.getFullEventInfo(this))
    this.render();
  },

  render: function() {
    var data = this.model.toJSON();
    var compiledTemplate = this.eventTemplate(data);
    this.$el.append(compiledTemplate);
    
  },

  events: {
    "click .list-view": "getFullEventInfo"

  },


    getFullEventInfo: function() {
    console.log("clicked")
    
    var newEventModalView = new App.Views.EventModal({model: this.model})
    
  }

});