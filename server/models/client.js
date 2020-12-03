
module.exports = function (sequelize, DataTypes) {
  const Client = sequelize.define("Client",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      about: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  Client.associate = function (models) {

    Client.belongsTo(models.User);

    Client.belongsTo(models.Trainer);

    Client.hasMany(models.WorkoutPlan);

    Client.hasMany(models.Note);

  };

  return Client;
};
