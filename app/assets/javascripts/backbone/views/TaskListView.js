var TaskListView = Backbone.View.extend({

  className: 'collection',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
  },

  render: function() {
    this.collection.each(function(model) {
      var view = new TaskView({model: model});
      this.$el.append(view.render().el);
    }, this);
    return this;
  },

  addOne: function(model) {
    var pos = taskCollection.indexOf(model);
    var view = new TaskView({model: model});
    var html = view.render().el;
    if (this.$el.find('.task-summary').length === 0) {
      this.$el.append(html);
    } else {
      this.$el.find('.task-summary').eq(pos - 1).after(html);
    }
  }

});
