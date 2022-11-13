const express = require('express')
const router = express.Router();

// This endpoint to register a new user
router.post('/', (req,res)=>{
    res.send("This registers a new user")
})

module.exports = router