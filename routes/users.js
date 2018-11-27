var express = require('express');
var router = express.Router();
var User = require('../models/User');
var SignUp = require('../models/SignUp');
/* GET users listing. */

router.get('/', (req, res) => {
  User.find({}, (err, user) => {
    if (err) throw err;
    console.log(user)
    return res.send(user, {aaa:user})
  })
});

router.post('/addUser', (req, res) => {
  const { firstName, lastName, email } = req.body;
  var newUser = new User();
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.email = email;

  if (!firstName) {
    return res.send({
      success: false,
      message: 'First name cannot be blank.'
    })
  }
  newUser.save(function (err, user) {
    if (err) throw err;
    res.json(user)
  })
});

router.post('/signup', (req, res) => {
  const {body} = req;
  let { firstName, lastName, email, passWord } = body;
  console.log(req.body)
  if (!firstName) {
    return res.send({
      success: false,
      message: 'First name cannot be blank.'
    })
  }
  if (!lastName) {
    return res.send({
      success: false,
      message: 'Last name cannot be blank.'
    })
  }
  if (!email) {
    return res.send({
      success: false,
      message: 'Email cannot be blank.'
    })
  }
  if (!passWord) {
    return res.send({
      success: false,
      message: 'Pass word cannot be blank.'
    })
  }

  email = email.toLowerCase();
  SignUp.findOne({ email: email }).then(user => {
    if (user) {
      return res.status(400).json({
        message: 'Email already exit!'
      });
    } else {
      const signUp = new SignUp();
      signUp.firstName = firstName;
      signUp.lastName = lastName;
      signUp.email = email;
      signUp.passWord = signUp.generateHash(passWord)
      signUp.save((err, user) => {
        if (err) throw err;
        res.json(signUp);
      })
    }
  })

})
module.exports = router;
