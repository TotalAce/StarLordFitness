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
    },

    notes: (req, res) => {
        db.Client.findAll(
            {
                where: { id: req.body.id },
                include: [db.Note]
            })
            .then(function (data) {
                res.json(data);
            });
    },

    create: (req, res) => {
        db.Client.create({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            UserId: req.body.UserId,
        }).then((data) => {
            res.send(data)
            console.log(data2);
        }).catch(function (err) {
            res.status(401).json(err);
        });
    }

}