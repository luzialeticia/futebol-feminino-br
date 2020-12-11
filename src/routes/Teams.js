const express = require('express')
const Team = express.Router()
const controller = require('../controllers/Teams')
const cors = require('cors')

Team.route('/', cors())
    .get(controller.getAll)
    .post(controller.addTeam)

Team.route('/:id', cors())
    .get(controller.getById)
    .put(controller.update)
    .patch(controller.update)
    .delete(controller.delete)

Team.get('/sate/:state', cors(), controller.getAllByState)
Team.get('/name/:name', cors(), controller.getByName)
Team.get('/initials/:initials', cors(), controller.getByInitials)

module.exports = Team