const express = require('express');
const router = express.Router();
const user = require('../controller/userController');

// add new registration to database
router.post('/users/signup',user.userRegistration);

// login the registered user
router.post('/users/login',user.userLogin);

module.exports = router;
