const { Sequelize } = require("sequelize");
const db = new Sequelize(process.env.DB_NAME, "postgres", "postgres", {
  host: "db",
  dialect: "postgres",
});

module.exports = { db };
