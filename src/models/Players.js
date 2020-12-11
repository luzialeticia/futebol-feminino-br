const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Player = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    nickname: String,
    team: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        minlength: 1,
        maxlength: 3,
        required: true
    },
    birth: {
        type: Date,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    profilePhoto: String
},
{
    versionKey: false
})

module.exports = mongoose.model('Player', Player)