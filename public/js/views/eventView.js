App.Views.Event = Backbone.View.extend({
  className: "event",


  initialize: function() {
    //console.log("New Event view created")
    // this.listenTo(this.model, "change", this.render);
    this.eventTemplate = Handlebars.compile($("#event-list").html());
    this.singleEventTemplate= Handlebars.compile($("#single-event").html());
    // $("#main").on("click", ".event", this.getFullEventInfo(this))
    this.render();
  },

  render: function() {
    var data = this.model.toJSON();
    var compiledTemplate = this.eventTemplate(data);
    this.$el.append(compiledTemplate);
    
  },

  events: {
    "click #show-bars": "seachForBars",
    "click #more-info": "getFullEventInfo",
    "click .less-info": "getLessEventInfo"
  },

  seachForBars: function() {
    this.$el.empty();
    var data = this.model.toJSON()
    var compiledTemplate = this.singleEventTemplate(data);
    this.$el.append(compiledTemplate)

    App.bars.fetch();

  },

    getFullEventInfo: function() {
    console.log("clicked")
    
    var newEventModalView = new App.Views.EventModal({model: this.model})
    

  },

  getLessEventInfo: function() {

    this.$el.empty();
    var data = this.model.toJSON();
    var compiledTemplate = this.eventTemplate(data);
    this.$el.append(compiledTemplate);
  }

});
