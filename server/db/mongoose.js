var mongoose = require('mongoose');

mongoose.promisse = global.Promisse;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };