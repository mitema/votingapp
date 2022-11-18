/* 
Author: Mitema Emmanuel
This file provides a connection to mongodb atlas
*/
const  config =  require('./default').config;
const mongoose = require('mongoose');
const db =  JSON.parse(JSON.stringify(config));


const connectToDB = async () => {
    try{
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useCreateIndex: true,
            useFindAndModify:false
        })
        console.log("MongoDB Connected");
    }
    catch(err){ 
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connectToDB;