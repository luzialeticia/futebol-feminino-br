const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Team = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    initials: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 3
    },
    division: {
        type: String,
        required: true
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

module.exports = mongoose.model('Team', Team)