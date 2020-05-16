const User = require('../app/models/userModel');

class LoginService {

    loginUser = (req,res) => {
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
    }   
}

module.exports = LoginService;