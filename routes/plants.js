const express = require("express");
const {
    getPlant,
    getPlants,
    createPlant,
    updatePlant,
    deletePlant,
} = require("../controllers/plants")

const router = express.Router();

// "/" handlers
router.route("/").get(getPlants).post(createPlant);

// "/:id" handlers
router.route("/:id").get(getPlant).put(updatePlant).delete(deletePlant);

module.exports = router;