const Team = require('../models/Teams')

module.exports = {
    //getAll
    getAll: (req, res) => {
        Team.find((err, teams) => {
            if(err) {
                return res.status(500).json('Erro ao buscar os times.')
            } else {
                return res.status(200).json(teams)
            }
        })
    },

    //getAllByState
    getAllByState: (req, res) => {
        const state = req.params.state
        const stateUpperCased = state.toUpperCase()

        Team.find({ state: stateUpperCased }, (err, teams) => {
            if(err) {
                return res.status(500).json('Erro ao buscar times.')
            } else if(teams == "") {
                return res.status(404).json('Times não encontrados.')
            } else {
                res.status(200).json(teams)
            }
        })
    },

    //getById
    getById: (req, res) => {
        const id = req.params.id

        Team.findById({ _id: id }, (err, team) => {
            if(err) {
                res.status(400).json('Time não encontrado.')
            } else {
                res.status(200).json(team)
            }
        })
    },

    //getByPopularName
    getByPopularName: (req, res) => {
        const { name } = req.params
        const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1)

        Team.find({ popularName: capitalizeName }, (err, team) => {
            if(err) {
                return res.status(500).json('Erro ao buscar time.')
            } else {
                res.status(200).json(team)
            }
        })
    },

    //getByInitials
    getByInitials: (req, res) => {
        const { initials } = req.params
        const initialsUpperCased = initials.toUpperCase()

        Team.find({ initials: initialsUpperCased }, (err, team) => {
            if(err) {
                return res.status(500).json('Erro so buscar time.')
            } else {
                return res.status(200).json(team)
            }
        })
    },

    //addTeam

    addTeam: (req, res) => {
        const team = new Team(req.body)

        team.save((err) => {
            if(err) {
                return res.status(400).json(err)
            } else {
                return res.status(202).json({
                    message: "Time cadastrado.",
                    team
                })
            }
        })
    }

    //updateTeam

    //updateTeamCoach

    //deleteTeam
}