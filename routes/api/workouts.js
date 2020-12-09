const express = require("express");
const router = express.Router();
const workoutsController = require("../../controllers/workoutsController")
const workoutPlansController = require("../../controllers/workoutPlansController")

// ---------------GET ALL WORKOUTS/CREATE NEW WORKOUT---------------
router.route("/workouts")
    .get(workoutsController.allMuscleGroups)
    .post(workoutsController.createWorkout)

// ---------------GET WORKOUTS BY MUSCLEGROUP CHOSEN---------------
router.route("/workouts/muscle")
    .post(workoutsController.workoutsByMuscle)

// ---------------DELETE/GET/POST AN EXERCIES FROM A CLIENT'S WORKOUT---------------
router.route("/workoutPlan/:id")
    .delete(workoutPlansController.deleteWorkoutPlan)
    .get(workoutPlansController.getWorkoutPlan)
    .post(workoutPlansController.createWorkoutPlan)

module.exports = router;
