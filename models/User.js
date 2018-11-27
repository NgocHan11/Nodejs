var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String
});

module.exports = mongoose.model('User', nameSchema)