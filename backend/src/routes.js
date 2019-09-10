const express = require('express');

const routes = express.Router();
const DevControler = require('./controllers/DevController');//Import do Controler.
const LikeController = require('./controllers/LikeController');
const DislikesController = require('./controllers/DislikeController');

routes.get("/devs",DevControler.index);
routes.post("/devs", DevControler.plus);
routes.post("/devs/:devId/likes", LikeController.plusLike);
routes.post("/devs/:devId/dislikes",DislikesController.dislikesDevs);
routes.delete('/devs/removeDev',DevControler.destroyDev);

module.exports = routes;