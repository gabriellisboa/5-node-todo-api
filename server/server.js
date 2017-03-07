var mongoose = require('mongoose');

mongoose.promisse = global.Promisse;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
    completedAt: {
        type: Number,
    },
});

var newTodo = new Todo({
    text: 'Estudar node',
    completed: true,
    completedAt: 2398173981,
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unnable to save Todo');
});