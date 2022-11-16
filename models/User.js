/*
Author: Mitema Emmanuel
This file creates a basic schema for all users
*/

const mongoose = require('mongoose');
const validator = require('express-validator');

const UserSchema =  mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    firstname: {
        type:String,
        required: true,

    },
    lastname:{
        type:String,
        required:true,

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
})

module.exports = mongoose.model('user', UserSchema)

