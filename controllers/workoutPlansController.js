const db = require("../models");

module.exports = {

    getWorkoutPlan: (req, res) => {
        db.WorkoutPlan.findAll(
            {
                where: { UserId: req.params.id },
                // include: [db.WorkoutPlan]
                // [{
                //     model: db.Client,
                //     include: [db.WorkoutPlan]
                // }]
            })
            .then((data) => res.send(data))
            .catch((err) => console.log(err))
    },

    createWorkoutPlan: (req, res) => {
        db.WorkoutPlan.create(
            {
                date: req.body.date,
                exercise: req.body.exercise,
                sets: req.body.sets,
                reps: req.body.reps,
                UserId: req.body.UserId
            })
            .then((data) => res.json(data))
            .catch((err) => console.log(err))
    },

    deleteWorkoutPlan: (req, res) => {
        db.WorkoutPlan.destroy(
            { where: { id: req.params.id } }
        )
            .then((data) => res.json(data))
            .catch((err) => console.log(err))
    },


}