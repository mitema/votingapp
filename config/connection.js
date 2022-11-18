/* 
Author: Mitema Emmanuel
This file provides a connection to mongodb atlas
*/
const  config =  require('./default').config;
const mongoose = require('mongoose');
const db =  config.mongoURI;


const connectToDB = async () => {
    try{
        await mongoose.connect(db)
        console.log("MongoDB Connected");
    }
    catch(err){ 
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connectToDB;