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

//getAllByState
getAllByState: (req, res) => {
    const state = req.query.state

    Team.find(state, (err, teams) => {
        if(err) {
            return res.status(400).send('Times não encontrados')
        }
    })
},

//getTeamById

//getTeamByName

//getTeamByInitials

//addTeam

addTeam: (req, res) => {
    const teamBody = req.body
    const team = new Team(teamBody)

    Team.save((err) => {
        if(err) {
            return res.status.send(err)
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