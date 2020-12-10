const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./database/db')
const index = require('./routes/index')
const teams = require('./routes/Teams')

db.connect()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/', cors(), index)
app.use('/teams', teams)

module.exports = app