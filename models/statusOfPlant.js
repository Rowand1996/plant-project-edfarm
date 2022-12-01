const { DataTypes } = require("sequelize");
const { db } = require("./database");

const statusOfPlant = db.define(
  "statusOfPlant",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    statusOfPlant: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "notPlanted",
      validate: {
        isIn: [["justPlanted", "stillGrowing", "fullyGrown", "healthy", "needsAttention", "dead",'notPlanted']],
          },
      },
      growthMeter: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 100,
        },
      },
  },
  
  {
    timestamps: true,
  }
);

module.exports = { statusOfPlant };
