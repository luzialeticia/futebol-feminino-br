const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*
Nome completo: String
Apelido: String
Time: String
Numeração: Number
Data de nascimento: Data
Posição: String
Foto: String
*/

const playerSchema = new Schema({
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

const PlayersCollection = mongoose.model('players', playerSchema)

module.exports = PlayersCollection