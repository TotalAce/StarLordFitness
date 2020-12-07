const db = require("../../models");
const express = require("express");
const router = express.Router();
const clientsController = require("../../controllers/clientsController")
const notesController = require("../../controllers/notesController")

router.route("/signup")
    .post(clientsController.create)

// ---------------CHOOSE A TRAINER TO WORK WITH---------------
router.route("/chooseTrainer/:id")
    .put(clientsController.updateTrainer)

// ---------------GET THEIR TRAINERS INFO---------------
router.route("/trainerInfo")
    .get(clientsController.trainerInfo)

// ---------------NOTES FOR THE WORKOUT/MARKED COMPLETE INCOMPLETE---------------
router.route("/notes")
    .get(clientsController.notes)
    .post(notesController.createNote)
    .put(notesController.editNote)

router.route("/:id")
    .get(clientsController.findClient)

module.exports = router;
