const User = require('../app/models/userModel');

class RegisterService {

    registerUser = (req,res) => {
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
    }
}

module.exports = RegisterService;