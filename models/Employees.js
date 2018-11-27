var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create modal

var EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  phone: Number,
  position: String,
  salary: Number
});

module.exports = mongoose.model('employees', EmployeeSchema);