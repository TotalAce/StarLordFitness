// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");

// Creating our Trainer model
module.exports = function (sequelize, DataTypes) {
  const Trainer = sequelize.define("Trainer", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // // The email cannot be null, and must be a proper email before creation
    // email: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   unique: true,
    //   validate: {
    //     isEmail: true
    //   }
    // },
    // // The password cannot be null
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // }
  });
  // Creating a custom method for our Trainer model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  // Trainer.prototype.validPassword = function (password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  // Hooks are automatic methods that run during various phases of the Trainer Model lifecycle
  // In this case, before a Trainer is created, we will automatically hash their password
  // Trainer.addHook("beforeCreate", function (user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });

  Trainer.associate = function (models) {

    Trainer.belongsTo(models.User);

    Trainer.hasMany(models.Client, {
      foreignKey: 'trainerId'
    });

  };

  return Trainer;
};
