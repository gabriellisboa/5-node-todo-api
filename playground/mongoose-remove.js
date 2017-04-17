const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Just remove everything and show a count
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// find first and remove (getting the object back)
// Todo.findOneAndRemove({_id: '58f4322ea3b64c6fbe731362'}).then((todo) => {
//     console.log(todo);
// });

// Remove by id and get the doc back
Todo.findByIdAndRemove('58f4322ea3b64c6fbe731362').then((todo) => {
    console.log(todo);
});