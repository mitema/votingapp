const mongoose =  require('mongoose');
const validator = require('express-validator')

const pollsSchema = new mongoose.Schema({
    id: {
        type: String,
        required:true
    },
    question: {
        type:String,
        required:true
    },
    options: {
        type:Array,
        required:true
    }
})

module.exports  = pollsSchema;