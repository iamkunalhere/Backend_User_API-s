const User = require('../app/models/userModel');

exports.create = (req,res) => {
    
    // validate user
    if(!req.body.emailId || !req.body.userName) {
        return res.send({
            message: "User cannot be empty"
        });
    }
    if(req.body.password == req.body.confirmPassword) {
       // create new user
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailId: req.body.emailId,
            userName: req.body.userName,
            password: req.body.password
        });
    }
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

exports.getAll = (req,res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.send( {
            message: err.message || "Error in fetching users data"
        });
    });
};

exports.loginUser = (req,res) => {
    User.findOne({emailId: req.body.emailId})
    .exec()
    .then(user => {
        if(user == null) {
            return res.json({
                message: 'Login Failed'
            });
        }
        if(user.userName == req.body.userName && user.password == req.body.password) {
            return res.json({
                message: 'Login Sucessful'
            });
        }
    })
    .catch(err => {
        res.send( {
            message: err.message || "Invalid User"
        });
    });
};
