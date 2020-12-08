
module.exports = function (sequelize, DataTypes) {
  const Trainer = sequelize.define("Trainer",
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
      credentials: {
        type: DataTypes.STRING,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  Trainer.associate = function (models) {

    Trainer.belongsTo(models.User);

    Trainer.hasMany(models.Client);

  };

  return Trainer;
};
