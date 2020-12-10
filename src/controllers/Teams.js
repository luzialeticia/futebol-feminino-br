const Team = require('../models/Teams')

module.exports = {
    //getAll
    getAll: (req, res) => {
        Team.find((err, teams) => {
            if(err) {
                return res.status(500).send('Erro ao buscar os times.')
            } else {
                return res.status(200).send({
                    message: "Sucesso!",
                    teams
                })
            }
        })
    },

    //getTeamById

    //getTeamByName

    //getTeamByInitials

    //addTeam

    addTeam: (req, res) => {
        const team = new Team(req.body)

        team.save((err) => {
            if(err) {
                return res.status(400).send(err)
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