const mongoose = require('mongoose')
const Schema = mongoose.Schema

/* Nome: String
Nome popular: String
Sigla: String
Localidade: String
Técnico: String
Elenco: Array
Escudo: String */

const team = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    popularName: {
        type: String,
        required: false
    },
    initials: {
        type: String,
        required: true
    },
    
})