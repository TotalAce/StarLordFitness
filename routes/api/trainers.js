const db = require("../../models");
const express = require("express");
const router = express.Router();
const trainersController = require("../../controllers/trainersController")

router.route("/signup")
    .post(trainersController.create)

// ---------------GET INFORMATION ABOUT ALL THEIR CLIENTS---------------
router.route("/clients")
    .get(trainersController.clientList)

    
// ---------------GET LIST OF ALL TRAINERS---------------
router.route("/list")
    .get(trainersController.trainerList)

module.exports = router;
