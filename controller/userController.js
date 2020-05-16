const registerService = require('../service/registerService');
const loginService = require('../service/loginService');

class Controller {

    userRegistration = (req,res) => {
        registerService.registerUser(req,res);
    }

    userLogin = (req,res) => {
        loginService.loginUser(req,res);
    }

}

module.exports = new Controller;