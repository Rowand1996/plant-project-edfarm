const express = require("express");

const {
  getUserPlants,
  getUserPlant,
  createUserPlant,
  updateUserPlant,
  deleteUserPlant,
} = require("../controllers/userPlants");

const router = express.Router();

router.route("/").get(getUserPlants).post(createUserPlant);

router
  .route("/:id")
  .get(getUserPlant)
  .put(updateUserPlant)
  .delete(deleteUserPlant);

module.exports = router;
