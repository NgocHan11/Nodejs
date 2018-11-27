var mongoose = require('mongoose');
var employees = require('../models/Employees');
var employeeController = {};

employeeController.create = (req, res) => {
  res.render('./../views/Employees/create');
}

employeeController.save = (req, res) => {
  var newEmployee = new employees(req.body);
  if(newEmployee.name !== '') {
    newEmployee.save((err) => {
      if(err) {
        console.log(err);
        res.render('./../views/Employees/create');
      }
      else {
        console.log('Create employee successfully!');
        alert('Create employee successfully!');
      }
    })
  } else {
     res.redirect('./../views/Employees/create');
  }
  
}
module.exports = employeeController;