const db = require("../models");

module.exports = {

    // allWorkouts: (req, res) => {
    //     db.Workout.findAll({
    //         group: ['muscleGroup']
    //     })
    //         .then(function (data) {
    //             res.json(data);
    //         })
    //         .catch(function (err) {
    //             console.log(err);
    //         })
    // },

    allMuscleGroups: (req, res) => {
        db.Workout.findAll({
            group: ['muscleGroup']
        })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                console.log(err);
            })
    },

    createWorkout: (req, res) => {
        db.Workout.create(
            {
                muscleGroup: req.body.muscleGroup,
                exercise: req.body.exercise
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                console.log(err);
            })
    },

    workoutsByMuscle: (req, res) => {
        db.Workout.findAll(
            { where: { muscleGroup: req.body.muscleGroup } }
        )
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                console.log(err);
            })
    }
}