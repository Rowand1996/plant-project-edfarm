const { DataTypes } = require("sequelize");
const { db } = require("./database");

const Plant = db.define(
  "Plant",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hydroponic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     lightLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    waterPerDay: {
      type: DataTypes.STRING,
      allowNull: false
    },
    growthTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = { Plant };
