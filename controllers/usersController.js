const db = require("../models");

function create(req, res) {
    db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        isTrainer: req.body.isTrainer
    }).then(function (data) {
        res.send(data)
        // console.log(data);
    }).catch(function (err) {
        // res.status(401).json(err);
        res.send(err)
    });

    // let UserId;

    // await db.User.findAll(
    //     {
    //         where: { username: req.body.username }
    //     })
    //     .then(function (data1) {
    //         // res.json(data);
    //         UserId = data1[0].dataValues.id;
    //     });

    // console.log(UserId);
    // console.log(req.body.isTrainer);

    // if (req.body.isTrainer === true) {
    //     console.log("if is running");
    //     db.Trainer.create({
    //         username: req.body.username,
    //         firstName: req.body.firstName,
    //         lastName: req.body.lastName,
    //         UserId: UserId
    //     }).then((data2) => {
    //         res.send(data2)
    //         console.log(res.json(data2));
    //     }).catch(function (err) {
    //         res.status(401).json(err);
    //     });
    // } else if (req.body.isTrainer === false) {
    //     console.log("else is running");
    //     db.Client.create({
    //         username: req.body.username,
    //         firstName: req.body.firstName,
    //         lastName: req.body.lastName,
    //         UserId: UserId
    //     }).then((data3) => {
    //         res.send(data3)
    //         console.log(res.json(data3));
    //     }).catch(function (err) {
    //         res.status(401).json(err);
    //     });
    // }

}

module.exports = { create }