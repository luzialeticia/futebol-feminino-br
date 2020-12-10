const mongoose = require('mongoose')
const config = require('../config/keys.config')

const connect = () => {
    mongoose.connect(config.DB_URL, { useNewUrlParser: true })
        .then(() => console.log('Database connected!'))
        .catch((err) => console.log('Error on connection.', err))
    mongoose.set('useFindAndModify', false)
}

module.exports = { connect }