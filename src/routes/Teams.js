const express = require('express')
const router = express.Router()
const controller = require('../controllers/Teams')
const cors = require('cors')

router.get('/', cors(), controller.getAll)
router.get('/state/:state', cors(), controller.getAllByState)
router.get('/:id', cors(), controller.getById)
router.get('/name/:name', cors(), controller.getByPopularName)
router.post('/add', cors(), controller.addTeam)

module.exports = router