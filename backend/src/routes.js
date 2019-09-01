const express = require('express');

const routes = express.Router();
const DevControler = require('./controllers/DevController');//Import do Controler.

routes.get("/",(req,res)=>{
    return res.json({message: `Ola`});
});

routes.post("/devs", DevControler.plus);

module.exports = routes;