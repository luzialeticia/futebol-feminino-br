const Team = require('../models/Teams')

module.exports = {
    //getAll
    getAll: (req, res) => {
        Team.find((err, teams) => {
            if(err) {
                return res.status(500).json('Erro ao buscar os times.', err)
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
                return res.status(500).json('Erro ao buscar times.', err)
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

        Team.findById(id, (err, team) => {
            if(err) {
                return res.status(404).json('Time não encontrado.')
            } else {
                return res.status(200).json(team)
            }
        })
    },

    //getByPopularName
    getByPopularName: (req, res) => {
        const { name } = req.params
        const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1)

        Team.find({ popularName: capitalizeName }, (err, team) => {
            if(err) {
                return res.status(500).json('Erro ao buscar time.', err)
            } else if(team == "") {
                return res.status(400).json('Time não encontrado.')
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
                return res.status(500).json('Erro ao buscar time.', err)
            } else if(team == "") {
                return res.status(400).json('Time não encontrado.')
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
    },

    //updatePUT
    update: (req, res) => {
        const { id } = req.params
        const body = req.body
        const updated = { new: true }

        Team.findByIdAndUpdate(
            id,
            body,
            updated,
            (err, team) => {
                if(err) {
                    return res.status(500).json(`Erro ao editar time. ${err}`)
                } else if(team) {
                    return res.status(200).json({
                        message: 'Time editado com sucesso!',
                        team
                    })
                } else if(team == ""){
                    return res.status(404).json('Time não encontrado.')
                }
            }
        )
    },

    //deleteTeam
    delete: (req, res) => {
        const { id } = req.params

        Team.findByIdAndDelete(id, (err) => {
            if(err) {
                return res.status(404).json('Time não encontrado.')
            } else {
                return res.status(200).json('Time deletado.')
            }
        })
    }
}