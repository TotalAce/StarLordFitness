const db = require("../models");

module.exports = {

    findTrainer: (req, res) => {
        db.Trainer.findOne(
            { where: { UserId: req.params.id } })
            .then((data) => res.send(data))
            .catch((err) => console.log(err))
    },

    clientList: (req, res) => {
        db.Trainer.findAll({
            // hierarchy: true,
            where: { UserId: req.params.id },
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

    create: (req, res) => {
        db.Trainer.create({
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