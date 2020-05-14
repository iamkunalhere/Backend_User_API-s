const express = require('express');
const router = express.Router();
const user = require('../controller/userController');

// get a list of users from database
router.get('/users/getAllUsers',user.getAll);

// add new registration to database
router.post('/users/signup',user.create);

// login the registered user
router.post('/users/login',user.loginUser);

module.exports = router;
