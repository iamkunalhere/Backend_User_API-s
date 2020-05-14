const express = require('express');
const router = express.Router();
const user = require('../controller/userController');

// get a list of users from database
router.get('/users',user.getAll);

// add new registration to database
router.post('/users',user.create);

// update the user in database
router.put('/users/:id', function(req,res) {
    res.send({type:'PUT'});
});

// delete the user from database
router.delete('/users/:id', function(req,res) {
    res.send({type:'DELETE'});
});

module.exports = router;
