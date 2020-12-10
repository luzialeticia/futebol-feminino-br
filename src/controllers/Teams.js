const Team = require('../models/Teams')

module.exports = {
    //getAll
    getAll: (req, res) => {
        Team.find((err, teams) => {
            if(err) {
                return res.status(500).json('Erro ao buscar os times.')
            } else {
                return res.status(200).send(teams)
            }
        })
    },

    getAllByState: (req, res) => {
        const state = req.params.state
        //const capitalizeState = state.toUppercase()

        Team.find({ state: state }, (err, teams) => {
            if(err) {
                return res.status(500).send('Erro ao buscar times.')
            } else if(teams == "") {
                return res.status(404).json('Times não encontrados.')
            } else {
                res.status(200).send(teams)
            }
        })
    },

    //getById
    getById: (req, res) => {
        const { id } = req.params

        Team.findById(id, (err, team) => {
            if(err) {
                res.status(400).send('Time não encontrado.')
            }
        })
    },

    //getTeamByName

    //getTeamByInitials

    //addTeam

    addTeam: (req, res) => {
        const team = new Team(req.body)

        team.save((err) => {
            if(err) {
                return res.status(400).json(err)
            } else {
                return res.status(202).send({
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