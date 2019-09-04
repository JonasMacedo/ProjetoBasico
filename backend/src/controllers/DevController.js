const axios = require('axios');
const Dev = require('../models/Devs'); //Importando o model.

module.exports ={

    async index(req,res){

        const {user} = req.headers;

        const loggedUser = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                {_id: { $ne: user}},
                {_id: { $nin:loggedUser.like}},
                {_id: { $nin:loggedUser.deslikes}},
            ],
        })

        return res.json(users);
    },

    async plus(req,res){
        
        const {username} = req.body;

        //verificando se o usuario existe no DB.
        const userExists = await Dev.findOne({user:username});
        if(userExists){
            return res.json(userExists);
        }

        //Buscando o usario da api do GitHub.
        const response = await axios.get(`https://api.github.com/users/${username}`);
        
        const {name,bio,avatar_url:avatar} = response.data;

        //Passando dados para inserção no DB.
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar,
        });

        return res.json(dev);
    }
}