const db = require("../models");

module.exports = {
    
    updateTrainer: (req, res) => {
        db.Client.update(
            { TrainerId: req.body.TrainerId },
            { where: { id: req.body.id } }
        )
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                console.log(err);
            })
    },

    trainerInfo: (req, res) => {
        db.Client.findAll(
            {
                where: { id: req.body.id },
                include: [db.Trainer]
            })
            .then(function (data) {
                res.json(data[0].Trainer);
            });
    }

}