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

})