// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");

// Creating our Client model
module.exports = function (sequelize, DataTypes) {
  const Client = sequelize.define("Client", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    trainerId: {
      type: DataTypes.INTEGER
    }
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
  // // Creating a custom method for our Client model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  // Client.prototype.validPassword = function (password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  // // Hooks are automatic methods that run during various phases of the Client Model lifecycle
  // // In this case, before a Client is created, we will automatically hash their password
  // Client.addHook("beforeCreate", function (user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });

  // Client.associate = function (models) {

    // Client.belongsTo(models.User);

    // Client.belongsTo(models.Client, {
    //   foreignKey: 'trainerId'
    // });

  // };

  return Client;
};
