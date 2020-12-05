
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

  Client.associate = function (models) {

    Client.belongsTo(models.User);

    Client.belongsTo(models.Trainer);

  };

  return Client;
};
