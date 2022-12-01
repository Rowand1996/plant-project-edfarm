const { Plant } = require('../models/plant');

const getPlants = async (req, res, next) => {
    let plants;
    try {
        plants = await Plant.findAll();
    } catch (e) {
        res.status(401).json({
        message: "unable to find plants",
        error: e,
        });
        return;
    }

    res.json(plants);
};

const getPlant = async (req, res, next) => {
    let gameID = req.params.id;

    let game;
    try {
        game = await Gamepad.findByPk(gameID);
    } catch (e) {
        res.status(404).json({
            message: "unable to find the plant with that id",
            error: e,
        });
        return;
    }

    res.json(plant);
};

const createPlant = async (req, res, next) => {
    const { id, name, hydroponic, lightLevel, waterPerDay, growthTime } = req.body;
    let plant;
    try {
        plant = await Plant.create({
            id,
            name,
            hydroponic,
            lightLevel,
            waterPerDay,
            growthTime,
        });
    } catch (e) {
        res.status(422).json({
            message: "error creating plant in database",
            error: e,
        });
        return;
    }

    res.status(201).json({
        id: plant.id,
        message: "plant created successfully",
    });
};

const updatePlant = async (req, res, next) => {
    const plantID = req.params.id;

    let plant;
    try {
        plant = await Plant.findByPk(plantID);
    } catch (e) {
        res.staus(404).json({
            message: "unable to find plant with that id",
            error: e,
        });
        return;
    }

    const {
        id,
        name,
        hydroponic,
        lightLevel,
        waterPerDay,
        growthTime,
    } = req.body;

    let plantData = {
        id,
        name,
        hydroponic,
        lightLevel,
        waterPerDay,
        growthTime,
    };

    try {
        await plant.update(plantData);
    } catch (e) {
        console.log(e);
        res.status(422).json({
            message: "unable to update plant with that id",
            error: e,
        });
        return;
    }

    res.json(plant);
};

const deletePlant = async (req, res, next) => {
    const plantID = req.params.id;

    let plant;
    try {
        plant = await Plant.findByPk(plantID);
    } catch (e) {
        res.status(404).json({
            message: "unable to find with that id",
            error: e,
        });
        return;
    }

    try {
        await plant.destroy();
    } catch (e) {
        res.status(422).json({
            message: "unable to delete plant with that id",
            error: e,
        });
        return;
    }

    res.status(204);
};

module.exports = { getPlants, getPlant, updatePlant, createPlant, updatePlant, deletePlant };







