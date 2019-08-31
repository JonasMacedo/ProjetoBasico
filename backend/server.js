const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('Url do seu banco',{
    useNewUrlParser: true
});


app.get("/", (req,res)=>{
    res.send('Olá');
});




app.listen(3001);