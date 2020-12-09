const teamsCollection = require('../models/Teams')

//getAllTeams
const getAllTeams = (req, res) => {
    teamsCollection.find((error, teams) => {
        if(error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send({
                message: "Sucesso!",
                teams
            })
        }
    })
}

//getAllTeamByState

//getTeamById

//getTeamByName

//getTeamByInitials

//addTeam

const addTeam = (req, res) => {
    const teamBody = req.body
    const team = new teamsCollection(teamBody)

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

module.exports = {
    getAllTeams,
    addTeam
}