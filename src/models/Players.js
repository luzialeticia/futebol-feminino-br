const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Player = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nickname: String,
    team: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        min: 1,
        max: 3,
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