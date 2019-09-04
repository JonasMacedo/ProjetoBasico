const express = require('express');
const routes = require('./routes'); //Importando as rotas.
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://Jonas:Dmolidor18@cluster0-1itqr.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true
});



app.listen(3001);