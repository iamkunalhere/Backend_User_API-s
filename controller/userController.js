const User = require('../app/models/userModel');

exports.create = (req,res) => {
    
       // create new user
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailId: req.body.emailId,
            userName: req.body.userName,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
        });
        if (user.password != user.confirmPassword) {
            res.json({
                message: 'Password not matched'
            });
        }
        else {
        // save user in database
        user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.send({
                message: err.message || "Some error occurred"
            });
        });
    }
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
    User.findOne({userName: req.body.userName})
    .exec()
    .then(user => {
        if(user == null) {
            return res.json({
                message: 'Invalid Username'
            });
        }
        if(user.userName == req.body.userName && user.password == req.body.password) {
            return res.json({
                message: 'Login Sucessful'
            });
        }
        else {
            return res.json({
                message: 'Invalid Password'
            });
        }
    })
    .catch(err => {
        res.send( {
            message: err.message || "Invalid User"
        });
    });
};
