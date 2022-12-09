const { UserPlant } = require("../models/associations");


const getUserPlants = async (req, res, next) => {
  let userPlants;
  try {
    userPlants = await UserPlant.findAll();
  } catch (error) {
    res.status(401).json({
      message: "unable to find userPlants",
      error,
    });
    return;
  }

  res.json(userPlants);
};


const getUserPlant = async (req, res, next) => {
  let userPlantID = req.params.id;

  let userPlant;
  try {
    userPlant = await UserPlant.findByPk(userPlantID);
  } catch (error) {
    res.status(404).json({
      message: "unable to find userPlant with that id",
      error,
    });
  }

  res.json(userPlant);
};


const createUserPlant = async (req, res, next) => {
  const { userId, plantId, Rating } = req.body;

  let userPlant;

  try {
    userPlant = await UserPlant.create({
      userId,
      plantId,
      Rating,
    });
  } catch (error) {
    res.status(422).json({
      message: "error creating userPlant in database",
      error: error,
    });
    return;
  }

  res.status(201).json({
    id: userPlant.id,
    message: "userPlant created successfully",
  });
};

const updateUserPlant = async (req, res, next) => {
  const userPlantID = req.params.id;

  const { userId, gameId, rating, } = req.body;

  let userPlant;

  try {
    userPlant = await UserPlant.findByPk(userPlantID);
  } catch (error) {
    res.status(404).json({
      message: "unable to find userPlant with that id",
      error,
    });
    return;
  }

  userGame.userId = userId;
  userGame.gameId = gameId;
  userGame.rating = rating;

  try {
    await userPlant.save();
  } catch (error) {
    res.status(422).json({
      message: "error updating userPlant in database",
      error: error,
    });
    return;
  }

  res.status(200).json({
    id: userPlant.id,
    message: "userPlant updated successfully",
  });
};


const deleteUserPlant = async (req, res, next) => {
  const userPlantID = req.params.id;

  let userPlant;

  try {
    userPlant = await UserPlant.findByPk(userPlantID);
  } catch (error) {
    res.status(404).json({
      message: "unable to find userPlant with that id",
      error,
    });
    return;
  }

  try {
    await userPlant.destroy();
  } catch (error) {
    res.status(422).json({
      message: "error deleting userPlant in database",
      error: error,
    });
    return;
  }

  res.status(200).json({
    id: userPlant.id,
    message: "userPlant deleted successfully",
  });
};

module.exports = {
  getUserPlants,
  getUserPlant,
  createUserPlant,
  updateUserPlant,
  deleteUserPlant,
};
