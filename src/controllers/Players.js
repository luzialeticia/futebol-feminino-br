const Player = require('../models/Players')

module.exports = {
    //getAllByTeam
    getAllByTeam: (req, res) => {
        const { team } = req.params
        const teamUpperCased = team.toUpperCase()

        Player.find({ team: teamUpperCased }, (err, players) => {
            if(err) {
                return res.status(500).json('Erro ao buscar jogadoras.', err)
            } else if(players == "") {
                return res.status(404).json('Jogadoras não encontradas.')
            } else {
                res.status(200).json(players)
            }
        })
    },
    
    //getById
    getById: (req, res) => {
        const { id } = req.params

        Player.findById(id, (err, player) => {
            if(err) {
                return res.status(404).json('Jogadora não encontrada.')
            } else {
                return res.status(200).json(player)
            }
        })
    },

    //getByName
    getByName: (req, res) => {
        const { name } = req.params
        const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1)

        Player.find({ name: new RegExp(capitalizeName, 'i') }, (err, player) => {
            if(err) {
                return res.status(500).json('Erro ao buscar jogadora.', err)
            } else if(player == "") {
                return res.status(400).json('Jogadora não encontrada.')
            } else {
                res.status(200).json(player)
            }
        })
    },

    //update
    update: (req, res) => {
        const { id } = req.params
        const body = req.body
        const updated = { new: true }

        Player.findByIdAndUpdate(
            id,
            body,
            updated,
            (err, player) => {
                if(err) {
                    return res.status(500).json(`Erro ao editar jogadora. ${err}`)
                } else if(player) {
                    return res.status(200).json({
                        message: 'Jogadora editada com sucesso!',
                        player
                    })
                } else if(player == ""){
                    return res.status(404).json('Jogadora não encontrada.')
                }
            }
        )
    },

    //add
    add: (req, res) => {
        const player = new Player(req.body)

        player.save((err) => {
            if(err) {
                return res.status(400).json(err)
            } else {
                return res.status(202).json({
                    message: "Jogadora cadastrada.",
                    player
                })
            }
        })
    }
}