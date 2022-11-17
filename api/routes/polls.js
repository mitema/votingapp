/* 
Author: Mitema Emmanuel
This file is responsible for the creation of routes associated with polls
*/ 

const app = require('express');
const router = express.router();

/* This route is for creation of posts */
router.post('/', (req,res)=>{
    res.send('Congratulations you have created your first post');
});

/* This route is for voting for a particular poll */
router.post('/', (req,res)=>{
    res.send('Congratulatioins, you have successfully voted for the poll')
});
/* This route is for sharing of posts */
router.post('/', (req,res)=> {
    res.send('Posts shared successfully')
})

/* This route is for deletion of posts*/
router.post('/', (req,res)=>{
    res.send('c')
})

