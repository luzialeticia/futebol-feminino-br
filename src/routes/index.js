const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({
        titulo: "Futebol Feminino Brasileiro",
        edicao: "2020"
    })
})

module.exports = router