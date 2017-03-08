var mongoose = require('mongoose');

mongoose.promisse = global.Promisse;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };