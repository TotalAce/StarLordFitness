
module.exports = function (sequelize, DataTypes) {
  const WorkoutPlan = sequelize.define("WorkoutPlan",
    {
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      exercise: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sets:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reps:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  WorkoutPlan.associate = function (models) {

    WorkoutPlan.belongsTo(models.User);

  };

  return WorkoutPlan;
};
