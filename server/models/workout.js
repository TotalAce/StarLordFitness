
module.exports = function (sequelize, DataTypes) {
  const Workout = sequelize.define("Workout",
    {
      muscleGroup: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      exercise: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return Workout;
};
