const express = require("express");
const router = express.Router();
const trainersController = require("../../controllers/trainersController")

// ---------------CREATE CLIENT FROM SIGNUP---------------
router.route("/signup")
    .post(trainersController.create)

// ---------------GET INFORMATION ABOUT ALL THEIR CLIENTS---------------
router.route("/clients/:id")
    .get(trainersController.clientList)

// ---------------GET LIST OF ALL TRAINERS---------------
router.route("/list")
    .get(trainersController.trainerList)

// ---------------GET CURRENT TRAINER---------------
router.route("/:id")
    .get(trainersController.findTrainer)

module.exports = router;
