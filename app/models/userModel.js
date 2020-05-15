const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema and model
const userSchema = new Schema({
    firstName: {
        type:String,
        required:[true,'Invalid first name'],
        match: /^[A-Z][a-z]{2}[a-z]*$/
    },
    lastName: {
        type:String,
        required:[true,'Invalid last name'],
        match: /^[A-Z][a-z]{2}[a-z]*$/
    },
    emailId: {
        type:String,
        required:[true,'Invalid Email'],
        index: {
            unique:true
        },
        match: /^[a-z][a-z0-9]*[.+-]?[a-z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,3}([.]{1}[a-z]{2,3})?$/
    },
    userName: {
        type:String,
        required:[true,'Invalid username'],
        index: {
            unique:true
        },
    },
    password: {
        type:String,
        required:true,
        match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    },
    confirmPassword: {
        type:String,
        required:true
    }
});

const User = mongoose.model('user',userSchema);

module.exports = User;