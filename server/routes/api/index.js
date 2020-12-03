const router = require("express").Router();
const clientRoutes = require("./clients");
const trainerRoutes = require("./trainers");
const userRoutes = require("./users");
const workoutRoutes = require("./workouts");


// client routes
router.use("/client", clientRoutes);

// trainer routes
router.use("/trainer", trainerRoutes);

// user routes
router.use(userRoutes);

// workout routes
router.use(workoutRoutes);

module.exports = router;
