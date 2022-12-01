const { Plant } = require("./plant");
const { statusOfPlant } = require("./statusOfPlant");
const { User } = require("./user");
const { UserPlants } = require("./associations");



  
  async function syncModels() {
    await setupAssociations();

    await User.sync({ alter: true });
    await Plant.sync({ alter: true });
    await statusOfPlant.sync({ alter: true});
    await UserPlants.sync({ alter: true});
  }









async function setupAssociations() {
    User.belongsToMany(Plant, { through: UserPlants });
  }

module.exports = {
    User,
    Plant,
    statusOfPlant,
    UserPlants,
    syncModels
}