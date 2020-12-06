const db = require("../../models");
const express = require("express");
const router = express.Router();
const workoutsController = require("../../controllers/workoutsController")
const workoutPlansController = require("../../controllers/workoutPlansController")

// ---------------GET ALL WORKOUTS/CREATE NEW WORKOUT---------------
router.route("/workouts")
    .get(workoutsController.allWorkouts)
    .post(workoutsController.createWorkout)

// ---------------GET WORKOUTS BY MUSCLEGROUP CHOSEN---------------
router.route("/workouts/muscle")
    .get(workoutsController.workoutsByMuscle)

// ---------------POST AN EXERCISE TO A CLIENT'S WORKOUT, CLIENT CAN GET THEIR WORKOUT---------------
// router.route("/workoutPlan/:id")
//     .get(workoutPlansController.getWorkoutPlan)
//     .post(workoutPlansController.createWorkoutPlan)

// ---------------DELETE AN EXERCIES FROM A CLIENT'S WORKOUT---------------
router.route("/workoutPlan/:id")
    .delete(workoutPlansController.deleteWorkoutPlan)
    .get(workoutPlansController.getWorkoutPlan)
    .post(workoutPlansController.createWorkoutPlan)

module.exports = router;
