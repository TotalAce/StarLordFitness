const db = require("../../models");
const express = require("express");
const router = express.Router();
const clientsController = require("../../controllers/clientsController")

// ---------------CHOOSE A TRAINER TO WORK WITH---------------
router.route("/chooseTrainer")
    .put(clientsController.updateTrainer)

// ---------------GET THEIR TRAINERS INFO---------------
router.route("/trainerInfo")
    .get(clientsController.trainerInfo)

module.exports = router;
