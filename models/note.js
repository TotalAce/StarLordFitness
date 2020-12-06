
module.exports = function (sequelize, DataTypes) {
  const Note = sequelize.define("Note",
    {
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: true
      },
      note: {
        type: DataTypes.STRING(500),
      },
      completed: {
        type: DataTypes.BOOLEAN,
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

  Note.associate = function (models) {

    Note.belongsTo(models.User);

  };

  return Note;
};
