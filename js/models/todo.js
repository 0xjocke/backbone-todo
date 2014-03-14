var app = app || {};

// Todo Model
// --------
// Out basic **Todo** model hass 'title' and 'complete' attributes

app.Todo = Backbone.Model.extend({
	//default attr ensure each todo has these attr
	defaults: {
		title: '',
		completed: false
	},

	//Toogle the completed state of this todo item.
	toggle: function(){
		this.save({
			completed: !this.get('completed')
		});
	}
});