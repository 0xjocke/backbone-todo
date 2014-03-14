var app = app || {};

var TodoList = Backbone.Collection.extend({
	// reference to this collections model
	model : app.Todo,

	// save all of the todo items under the "todo-backbone" namespace
	localStorage: new Backbone.LocalStorage('todos-backbone'),

	//Filter to only show finished items
	completed: function() {
		return this.filter(function(todo){
			return todo.get('completed');
		});
	},

	//Filter to only show items not finished

	remaining: function(){
		return this.without.apply(this, this.completed());
	},

	// This genrated the next order number for new todos.
	nextOrder: function(){
		if (!this.length) {
			return 1;
		}
		return this.last().get('order') + 1;
	},

	// Todos are sorted by thier original insert order
	comparator: function(){
		return todo.get('order');
	}
});

app.Todos = new TodoList();
