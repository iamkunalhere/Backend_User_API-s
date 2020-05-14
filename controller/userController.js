const User = require('../app/models/userModel');

exports.create = (req,res) => {
    
    // validate user
    if(!req.body.content) {
        return res.send({
            message: "User cannot be empty"
        });
    }
    
    // create new user
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        userName: req.body.userName,
        password: req.body.password
    });

    // save user in database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.send({
            message: err.message || "Some error occurred"
        });
    });
};