const db = require("../models");

module.exports = {

    createNote: (req, res) => {
        db.Note.create(
            {
                date: req.body.date,
                note: req.body.note,
                completed: req.body.completed,
                UserId: req.body.UserId,
                ClientId: req.body.ClientId
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.send(err);
            })
    },

    editNote: (req, res) => {
        db.Note.update
            (
                req.body,
                { where: { id: req.body.id } }
            )
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.send(err);
            })
    }

}