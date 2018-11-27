var express = require('express');
var router = express.Router();
var employees = require('../controllers/Employees');

router.get('/create', employees.create);

// router.get('/create',employees.create)

module.exports = router;