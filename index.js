const express = require('express');
const app = express();
const auth = require('./api/routes/auth');
require('dotenv').config();
const connectToDB =  require('./config/connection');
const jwtToken  = require("jsonwebtoken");

// This connects to the database
connectToDB()

// This helps to parse json payload encoded as data in the url, it also allows us to access req.body
app.use(express.json()); 
app.use('/', auth);
app.get('/', (req,res)=>res.json({msg:"Entry point for voting app API..."}));
const PORT = process.env.PORT| 3000;
app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`);
})