const Dev = require('../models/Devs');

module.exports = {

    async dislikesDevs(req,res){

        const {user} = req.headers;
        const {devId} = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({error: "Dev inexistente!"});
        }

        loggedDev.desLikes.push(targetDev._id);
        await loggedDev.save();

        return res.json(loggedDev); 

    }



}