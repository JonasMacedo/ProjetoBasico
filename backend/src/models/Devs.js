const {Schema,model} = require('mongoose');

const DevSchema = new Schema({
    //Aqui se especifica a estrutura do DB, para armazernar um desenvolvedor.
    //Atibutos obrigatorios se passa como objeto JSON e com Type.
    name:{
        type: String,
        required: true,
    },
    user:{
        type: String,
        required: true,
    },
    //Atributos não obrigatorios, não se passa objeto JSON nem TYPE.
    bio: String,
    avatar:{
        type: String,
        required: true,
    },
    likes:[{
        type: Schema.Types.ObjectId,
        require: 'Devs',
    }],
    desLikes:[{
        type: Schema.Types.ObjectId,
        ref: 'Devs',
    }],
},{
    timestamps: true,
});

module.exports = model('Devs',DevSchema);