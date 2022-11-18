/*
Author: Mitema Emmanuel
This file creates a basic schema for all users
*/

const mongoose = require('mongoose');
const validator = require('express-validator');

const UserSchema =  mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        default:Date.now
    }
}, { collection: 'users'})

module.exports = mongoose.model('user', UserSchema)

