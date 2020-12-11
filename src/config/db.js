const mongoose = require('mongoose')
const dotEnv = require('dotenv')

dotEnv.config()
const mongoUri = process.env.MONGO_URI

const connect = () => {
    mongoose.connect(mongoUri, { useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false})

        .then(() => console.log('Database connected!'))
        .catch((err) => console.log('Error on connection.', err))
}

module.exports = { connect }