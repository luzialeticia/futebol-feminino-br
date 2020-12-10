const Team = require('../models/Teams')

module.exports = {
    //getAll
const getAll = (req, res) => {
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
}

//getAllByState
const getAllByState = (req, res) => {
    const { state } = req.query

    Team.find(state, (err, teams) => {
        if(err) {
            return res.status(400).send('Times não encontrados')
        }
    })
}

//getTeamById

//getTeamByName

//getTeamByInitials

//addTeam

const addTeam = (req, res) => {
    const teamBody = req.body
    const team = new Team(teamBody)

    team.save((error) => {
        if(error) {
            return res.status.send(error)
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