const teamsCollection = require('../models/Teams')

//getAllTeams
const getTeams = (req, res) => {
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