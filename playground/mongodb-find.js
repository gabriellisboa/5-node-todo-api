// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('1 - Fetch all the documents');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unnable to find todos', err);
    });

    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log('2 - Fetch all documents that has completed as false');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unnable to find todos', err);
    });

    db.collection('Todos').find({
        _id: new ObjectID('588ea208aad28f2767b6ea83'),
    }).toArray().then((docs) => {
        console.log('3 - Fetch documents by id');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unnable to find todos', err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log('4 - Todos count');
        console.log(count);
    }, (err) => {
        console.log('Unnable to find todos', err);
    });

    db.collection('Users').find({name: 'Maria'}).toArray().then((docs) => {
        console.log('5 - Find users with specific name');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unnable to find users', err);
    })

    db.close();
    console.log('Connection closed');
});

