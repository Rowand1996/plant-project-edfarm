const express = require("express");
const {
    getPlant,
    getPlants,
    createPlant,
    updatePlant,
    deletePlant,
} = require("../controllers/plants");
const { verifyToken, verifyRole } = require("../middleware/auth");

const router = express.Router();

// "/" handlers
router.route("/").get(verifyToken, getPlants).post(verifyToken, createPlant);

// "/:id" handlers
router.route("/:id")
.get(getPlant)
.put(verifyToken, verifyRole("admin"), updatePlant)
.delete(verifyToken, verifyRole("admin"), deletePlant);

module.exports = router;