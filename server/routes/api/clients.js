const db = require("../../models");
const express = require("express");
const router = express.Router();

router.put("/chooseTrainer", function (req, res) {
    db.Client.update({ trainerID: req.body.trainerID },
        { where: { id: req.body.id } })
        .then(function (data) {
            console.log(req);
            console.log(req.body);
            res.json(data);
        });
})

module.exports = router;
