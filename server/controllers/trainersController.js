const db = require("../models");

module.exports = {

    clientList: (req, res) => {
        db.Trainer.findAll({
            hierarchy: true,
            where: { id: req.body.id },
            include: [
                {
                    model: db.Client,
                    include: [db.Note]
                }]
        })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                console.log(err);
            })
    },

    trainerList: (req, res) => {
        db.Trainer.findAll()
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                console.log(err);
            })
    },

}