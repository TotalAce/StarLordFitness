// const db = require("../../models");
const express = require("express");
const passport = require("../../config/passport");
const router = express.Router();
const usersController = require("../../controllers/usersController");
const db = require("../../models");

// If the user has valid login credentials, send them to the members page.
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(401).json(err);
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        // console.log(req.user);
      });
    }
  })(req, res, next);
});

router.get("/user", (req, res) => {
  if (!req.user) {
    res.json();
  } else {
    db.User.findOne({
      where: { id: req.user.id },
      attributes: {exclude: ['password', 'email']},
      // include: [
      //   {
      //     model: db.Trainer
      //   },
      //   {
      //     model: db.WorkoutPlan,
      //   },
      //   {
      //     model: db.Client
      //   }
      // ],
      // order: [
      //   [db.Income, 'day', 'ASC'],
      //   [db.Expense, 'day', 'ASC']
      // ]
    }).then(function (data) {
      res.json(data);
    });
  }
})

// Route for signing up a user
router.route("/signup")
  .post(usersController.create)

router.get('/logout', function (req, res) {
  req.logout();
  req.session.destroy(function (err) {
    if (err) {
      return next(err);
    }
    return res.send({ success: true });
  });
});


module.exports = router;
