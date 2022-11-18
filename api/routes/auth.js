const express = require('express')
const router = express.Router();
const {check, validationResult } = require('express-validator');

//TODO: Add validation for all the routes

// This endpoint to register a new user
router.post('/register', 
    [
        check('name').not().isEmpty().withMessage("please include a name"),
        check('email').isEmail().withMessage( "please enter a valid email"),
        check('password').isLength({min:8}).withMessage( "Please enter a password that is atleast 8 characters long")
    ],
    (req,res)=>{
        const error = validationResult(req).formatWith(({msg})=>msg);
        const hasError = !error.isEmpty();

        if(hasError){
            return res.status(400).json({error:error.array()});
        }
        res.send("This registers a new user")
    }
  
)

// This endpoint to login a user 
router.post('/login', (req, res) => {
    res.send("You are now logged in as a new user");
})


//This endpoint to log out a user
router.get('/', (req,res)=>{
    res.send('You are now logged out ')
})

module.exports = router