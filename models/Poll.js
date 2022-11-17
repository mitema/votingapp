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
    }, 
    vote_count: {
        type:int,
        required:true
    }
})

module.exports  = pollsSchema;