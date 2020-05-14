const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema and model
const userSchema = new Schema({
    firstName: {
        type:String,
        required:[true,'Invalid first name']
    },
    lastName: {
        type:String,
        required:[true,'Invalid last name']
    },
    emailId: {
        type:String,
        required:[true,'Invalid Email'],
        index: {
            unique:true
        },
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
        required:true
    }
});

const User = mongoose.model('user',userSchema);

module.exports = User;