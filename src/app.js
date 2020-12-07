const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models/repository')
const index = require('./routes/index')

db.connect()

app.use(cors())
app.use(express.json())
app.use('/', cors(), index)

module.exports = app