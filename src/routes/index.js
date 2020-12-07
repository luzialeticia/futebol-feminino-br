const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({
        titulo: "Campeonato Brasileiro de Futebol Feminino - Série A1",
        edicao: "2020"
    })
})

module.exports = router