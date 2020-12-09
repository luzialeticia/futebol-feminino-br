const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    popularName: String,
    initials: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 3
    },
    state: {
        type: String,
        required: true,
        minlength:2,
        maxlength: 2
    },
    coach: String,
    logo: String
},

{
    versionKey: false
})

const TeamsCollection = mongoose.model('teams', teamSchema)

module.exports = TeamsCollection