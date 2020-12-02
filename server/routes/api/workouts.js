const db = require("../../models");
const express = require("express");
const router = express.Router();

router.get("/workouts", function (req, res) {
    db.Workout.findAll()
        .then(function (data) {
            res.json(data);
        });
});

router.get("/workouts/musclegroup", function (req, res) {
    db.Workout.findAll({ where: { muscleGroup: req.body.muscleGroup } })
        .then(function (data) {
            res.json(data);
        });
});

router.post("/workouts", function (req, res) {
    console.log(req.body);
    db.Workout.create({
        muscleGroup: req.body.muscleGroup,
        exercise: req.body.exercise
    })
        .then(function (data) {
            res.json(data);
        });
});

module.exports = router;
