const express = require('express')
const router = express.Router()
const controller = require('../controllers/Teams')
const cors = require('cors')

router.get('/', cors(), controller.getAll)
router.get('/state/:state', cors(), controller.getAllByState)
router.get('/:id', cors(), controller.getById)
router.get('/name/:name', cors(), controller.getByName)
router.get('/initials/:initials', cors(), controller.getByInitials)
router.post('/add', cors(), controller.addTeam)
router.put('/update/:id', cors(), controller.update)
router.patch('/update/:id', cors(), controller.update)
router.delete('/delete/:id', cors(), controller.delete)

module.exports = router