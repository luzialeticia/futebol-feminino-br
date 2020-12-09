const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models/repository')
const index = require('./routes/index')
const teams = require('./routes/Teams')

db.connect()

app.use(cors())
app.use(express.json())
app.use('/', cors(), index)
app.use('/teams', teams)

module.exports = app