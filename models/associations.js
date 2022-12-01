const { DataTypes } = require("sequelize");
const { db } = require("./database");

const UserPlants = db.define("UserPlants", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  growthMeter: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 100,
    },
  },
  Rating: {
    type: DataTypes.STRING,
    defaultValue: "NA",
    validate: {
      isIn: [["NA", "easy", "moderate", "challenging", "difficult", "veryDifficult",'extreme']],
}
  },
  currentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "notPlanted",
    validate: {
      isIn: [["justPlanted", "stillGrowing", "fullyGrown", "healthy", "needsAttention", "dead",'notPlanted']],
        },
    },
});

module.exports = {
  UserPlants
};