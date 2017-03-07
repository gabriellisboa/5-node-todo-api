// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('58be23499fe67bbaf8d4f6e6'),
    }, {
        $set: {
            completed: false,
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        id: new ObjectID('58be271c9fe67bbaf8d4f75c'),   
    }, {
        $set: {
            name: 'Gabriel'
        }
    }, {
        returnOriginal: false,
    }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        name: 'Gabriel'
    }, {
        $inc: {
            age: +1,
        }
    }, {
        returnOriginal: false,
    }).then((result) => {
        console.log(result);
    }); 



    db.close();
    console.log('Connection closed');
});

