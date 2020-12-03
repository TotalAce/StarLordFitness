const db = require("../models");

module.exports = {
    create: (req, res) => {
        db.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            isTrainer: req.body.isTrainer
        }).then(function () {
            db.User.findAll({ where: { username: req.body.username } })
                .then(function (data) {
                    // res.json(data);
                    let UserId = data[0].dataValues.id;

                    if (req.body.isTrainer === true) {
                        db.Trainer.create({
                            username: req.body.username,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            UserId: UserId
                        }).then(() => {
                            res.send("Successfully added Trainer")
                            console.log(req.body);
                        }).catch(function (err) {
                            res.status(401).json(err);
                        });
                    } else if (req.body.isTrainer === false) {
                        db.Client.create({
                            username: req.body.username,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            UserId: UserId
                        }).then(() => {
                            res.send("Successfully added Client")
                            console.log(req.body);
                        }).catch(function (err) {
                            res.status(401).json(err);
                        });
                    }
                });
        }).catch(function (err) {
            res.status(401).json(err);
        });

    }
}