
module.exports = function (sequelize, DataTypes) {
  const WorkoutPlan = sequelize.define("WorkoutPlan",
    {
      date: {
        type: DataTypes.DATE,
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
      ClientId: {
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

    WorkoutPlan.belongsTo(models.Client);

  };

  return WorkoutPlan;
};
