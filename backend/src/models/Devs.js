const {Schema,model} = require('mongoose');

const DevSchema = new Schema({

    title:{
        type: String,
        required: true,
    },
    user:{
        type: string,
        required: true,
    },
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
    createdAt:{
        type: String,
        required: true,
    },
    updateAt:{
        type: String,
        required: true,
    }
});

module.exports = model('Devs',DevSchema);