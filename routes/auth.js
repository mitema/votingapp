const express = require('express')
const router = express.Router();

// This endpoint to register a new user
router.post('/', (req,res)=>{
    res.send("This registers a new user")
})

// This endpoint to login a user 
router.get('/', (req, res) => {
    res.send("You are now logged in as a new user");
})


//This endpoint to log out a user
router.get('/', (req,res)=>{
    res.send('You are now logged out ')
})

module.exports = router