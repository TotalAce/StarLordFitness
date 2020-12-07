// const db = require("../../models");
const express = require("express");
const passport = require("../../config/passport");
const trainersController = require("../../controllers/trainersController");
const router = express.Router();
const usersController = require("../../controllers/usersController");
const db = require("../../models");
const jwt = require("jsonwebtoken")

const JWTSECRET = "" + process.env.JWTSECRET

// const verifyJWT = (req, res, next) => {
//   const token = req.headers["x-access-token"]

//   if (!token) {
//     res.send("There is no token")
//   } else {
//     jwt.verify(token, JWTSECRET, (err, decoded) => {
//       if (err) {
//         res.json({ auth: false, message: "Failed to authenticate" })
//       } else {
//         req.userId = decoded.id;
//         next();
//       }
//     })
//   }
// }

// router.get("/workoutPlan", verifyJWT, (req, res) => {
//   db.User.findAll(
//     {
//       where: { id: req.user.id },
//       include: [db.WorkoutPlan]
//       // [{
//       //     model: db.Client,
//       //     include: [db.WorkoutPlan]
//       // }]
//     })
//     .then((data) => res.json(data[0].WorkoutPlans))
//     .catch((err) => console.log(err))
// })

// If the user has valid login credentials, send them to the members page.
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(401).json(err);
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        // console.log(req.user);

        // const id = req.user.dataValues.id
        // const token = jwt.sign({ id: id }, JWTSECRET, {
        //   expiresIn: 1800,
        // })

        res.json({
          // auth: true,
          // token: token,
          id: req.user.dataValues.id,
          username: req.user.dataValues.username,
          isTrainer: req.user.dataValues.isTrainer,
          firstName: req.user.dataValues.firstName,
          lastName: req.user.dataValues.lastName
        })
        // res.send("Successfully Authenticated");
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
    return res.status(205).json(err);
  });
});


module.exports = router;
