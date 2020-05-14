const express = require('express');
const router = express.Router();

// get a list of users from database
router.get('/users', function(req,res) {
    res.send({type:'GET'});
});

// add new registration to database
router.post('/users', function(req,res) {
    res.send({type:'POST'});
});

// update the user in database
router.put('/users/:id', function(req,res) {
    res.send({type:'PUT'});
});

// delete the user from database
router.delete('/users/:id', function(req,res) {
    res.send({type:'DELETE'});
});

module.exports = router;
