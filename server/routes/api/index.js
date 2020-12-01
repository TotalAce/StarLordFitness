const router = require("express").Router();
// const clientRoutes = require("./clients");
// const trainerRoutes = require("./trainers");
const userRoutes = require("./users");


// client routes
// router.use("/clients", clientRoutes);

// client routes
// router.use("/trainers", trainerRoutes);

// client routes
router.use("/users", userRoutes);

module.exports = router;
