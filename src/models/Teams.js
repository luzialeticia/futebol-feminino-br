const mongoose = require('mongoose')
const Schema = mongoose.Schema

const team = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    
})