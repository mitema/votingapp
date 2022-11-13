const express = require('express');
const app = express();
const auth = require('./routes/auth');

app.use('/api/register', auth);

app.get('/', (req,res)=>res.json({msg:"Entry point for voting app API..."}));
const PORT = process.env.PORT| 3000;
app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`);
})