var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var signUpSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  passWord: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  }
});

signUpSchema.methods.generateHash = function (passWord) {
  return bcrypt.hashSync(passWord, 10);
}

module.exports = mongoose.model('signup', signUpSchema);
