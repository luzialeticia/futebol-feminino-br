const Player = require('../models/Players')

module.exports = {
    //getAllByTeam
    getAllByTeam: (req, res) => {
        const team = req.params.team
        const teamUpperCased = team.toUpperCase()

        Player.find({ team: teamUpperCased }, (err, players) => {
            if(err) {
                return res.status(500).json('Erro ao buscar jogadoras.', err)
            } else if(players == "") {
                return res.status(404).json('Jogadoras não encontrados.')
            } else {
                res.status(200).json(players)
            }
        })
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