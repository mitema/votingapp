const express = require('express');
const app = express();
const auth = require('./api/routes/auth');


app.use(express.json()); // This helps to parse json payload encoded as data in the url, it also allows us to access req.body
app.use('/', auth);
app.get('/', (req,res)=>res.json({msg:"Entry point for voting app API..."}));
const PORT = process.env.PORT| 3000;
app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`);
})