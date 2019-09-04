const Dev = require('../models/Devs');

module.exports ={
    async plusLike(req,res){

        const {user} = req.headers;
        const {devId} = req.params;

        //Buscando models dos usuarios no DB.
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        //Verifica existencia do Dev.
        if(!targetDev){
            return res.status(400).json({error: 'Dev inexistente!'});
        }

        if(targetDev.likes.includes(loggedDev._id)){
            console.log("Deu Match");
        }

        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();

        return res.json(loggedDev);
    }
}