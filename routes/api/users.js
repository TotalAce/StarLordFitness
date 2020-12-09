const express = require("express");
const passport = require("../../config/passport");
const router = express.Router();
const usersController = require("../../controllers/usersController");
const db = require("../../models");

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(401).json(err);
    else {
      req.logIn(user, (err) => {
        if (err) throw err;

        res.json({
          id: req.user.dataValues.id,
          username: req.user.dataValues.username,
          isTrainer: req.user.dataValues.isTrainer,
          firstName: req.user.dataValues.firstName,
          lastName: req.user.dataValues.lastName
        })
      });
    }
  })(req, res, next);
});

router.get("/user", (req, res, next) => {
  if (!req.user) {
    res.json();
  } else {
    db.User.findOne({
      where: { id: req.user.id },
      attributes: { exclude: ['password', 'email'] },
      include: [
        {
          model: db.Trainer
        },
        {
          model: db.WorkoutPlan,
        },
        {
          model: db.Client
        }
      ],
    }).then(function (data) {
      res.json(data);
    });
  }
})

router.route("/signup")
  .post(usersController.create)

router.get('/logout', function (req, res) {
  req.logout();
  req.session.destroy(function (err) {
    if (err) {
      return next(err);
    }
    return res.status(205).json(err);
  });
});

module.exports = router;
