const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = '58bf7d2343bfd135d821f3d8';

if(!ObjectID.isValid(id)) {
    return console.log('Id not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if(!todo) {
//         return console.log('Todo not found :(');
//     }
//     console.log('Todo:', todo);
// });


Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found :(');
    }
    console.log('Todo:', todo);
}).catch((e) => console.log(e));