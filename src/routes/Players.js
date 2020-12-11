const express = require('express')
const Player = express.Router()
const controller = require('../controllers/Players')
const cors = require('cors')

Player.post('/', controller.add)

Player.route('/:id', cors())
    .get(controller.getById)
    .put(controller.update)
    .patch(controller.update)
    .delete(controller.delete)

Player.get('/team/:team', cors(), controller.getAllByTeam)
Player.get('/name/:name', cors(), controller.getByName)

module.exports = Player