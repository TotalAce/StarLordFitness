const db = require("../../models");
const express = require("express");
const router = express.Router();
const trainersController = require("../../controllers/trainersController")

// ---------------GET INFORMATION ABOUT ALL THEIR CLIENTS---------------
router.route("/clients")
    .get(trainersController.clientList)

module.exports = router;
