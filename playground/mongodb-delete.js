// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany - delete all documents that matches the criteria
    // db.collection('Todos').deleteMany({text: 'Estudar node'}).then((result) => {
    //     console.log(result);
    // });


    // deleteOne - delete one document that matches the criteria
    // db.collection('Todos').deleteOne({text: 'Estudar node'}).then((result) => {
    //     console.log(result);
    // });


    // findOneAndDelete - delete one document that matches the criteria, delete it and shows the deleted document on result object
    // db.collection('Todos').findOneAndDelete({text: 'Estudar node'}).then((result) => {
    //     console.log(result);
    // });

    // Delete all users with name "Gabriel Lisboa"
    // db.collection('Users').deleteMany({name: 'Gabriel Lisboa'}).then((result) => {
    //     console.log(result);
    // });

    // Delete one users with id 588ea392364741282e1a8a09
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('588ea392364741282e1a8a09'),
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });



    db.close();
    console.log('Connection closed');
});

