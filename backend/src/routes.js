const express = require('express');

const routes = express.Router();


routes.get("/",(req,res)=>{
    return res.json({message: `Ola`});
});

routes.post("/devs",(req,res)=>{
    
    console.log(req.body);//Teste para apresentar o corpo da requisicao.

    return res.json({ok: true});
})

module.exports = routes;