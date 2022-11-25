const express = require('express')
const router = express.Router();
const {check, validationResult } = require('express-validator');
const User = require('../../models/user');
const bcrypt =  require('bcrypt');
const jwtToken = require('jsonwebtoken')

//TODO: Add validation for all the routes

// This endpoint to register a new user
router.post('/register', 
    [
        check('name').not().isEmpty().withMessage("please include a name"),
        check('email').isEmail().withMessage( "please enter a valid email"),
        check('password').isLength({min:8}).withMessage( "Please enter a password that is atleast 8 characters long")
    ],
    async (req,res)=>{
        const error = validationResult(req).formatWith(({msg})=>msg);
        const hasError = !error.isEmpty();

        if(hasError){
            return res.status(400).json({error:error.array()});
        }

        const {name,email,password} = req.body
        try{
            user  =  await User.findOne({email});
            if(user){
                res.status(400).json({msg:"User already exists"});
            }
            user  = new User({
                name,
                email,
                password
        })
            const salt  = await bcrypt.genSalt(10);
            user.password  = await bcrypt.hash(password, salt);

            await user.save();
            //The goal is to successfully send a jwt token to a user
            const payload = {  
                user: {
                    id: user.id, 
                }
            }

            jwtToken.sign(payload, process.env.JWT_SECRET, {
                expiresIn: 360000
            }, (err,token)=>{
                if(err) throw err
                res.json({token})
            })
        }catch(error){
            console.error(error.message);
            res.status(500).send('Server error');
        }
        
        

         

        // get the users details from req.body
        // check if user exists in the database first
        //create an instance of user
        // add the user details to the instance
        // hash the password using bcrpt
        // Save the user in the database
        //res.send("This registers a new user")
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