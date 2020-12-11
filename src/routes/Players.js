const express = require('express')
const router = express.Router()
const controller = require('../controllers/Players')
const cors = require('cors')

router.get('/team/:team', cors(), controller.getAllByTeam)
router.get('/:id', cors(), controller.getById)
router.get('/name/:name', controller.getByName)
router.post('/add', cors(), controller.add)
router.put('/update/:id', cors(), controller.update)
router.patch('/update/:id', cors(), controller.update)
router.delete('/delete/:id', cors(), controller.delete)

module.exports = router