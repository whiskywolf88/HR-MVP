const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const morgan = require("morgan");
const port = 8800;
const controllers = require("./controllers");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "../client/dist")));

app.get("/recipes", controllers.getRecipes);

app.listen(port, () => console.log(`App is listening on port ${port}`));
