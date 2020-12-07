const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models/repository')

db.connect()

app.use(cors())
app.use(express.json())

module.exports = app