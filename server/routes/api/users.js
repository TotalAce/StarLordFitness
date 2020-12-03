// const db = require("../../models");
const express = require("express");
const passport = require("../../config/passport");
const router = express.Router();
const usersController = require("../../controllers/usersController");

// If the user has valid login credentials, send them to the members page.
router.post("/login", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
  // res.redirect("/members")
});

// Route for signing up a user
router.route("/signup")
  .post(usersController.create)

// Route for logging user out
router.get("/logout", function (req, res) {
  req.logout();
  // res.redirect("/");
});



module.exports = router;
