const express = require("express");
const logger = require("./middleware/logger");
const { syncModels } = require("./models/models");
const plantsRouter = require("./routes/plants");
const userPlantsRouter = require("./routes/userPlants");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(logger);

app.use("/plants", plantsRouter);
app.use("/userPlants", userPlantsRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.json({
    hello: "world!!",
  });
});

const updateDB = false;

if (updateDB) {
  syncModels().then((_) => runApp);
} else {
  runApp();
}

function runApp() {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}