const db = require("../models");

module.exports = {

    clientList: (req, res) => {
        db.Trainer.findAll({
            where: { id: req.body.id },
            include: [db.Client]
        })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                console.log(err);
            })
    },

}