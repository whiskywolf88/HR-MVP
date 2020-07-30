const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const morgan = require("morgan");
const port = 8800;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "../client/dist")));

app.listen(port, () => console.log(`App is listening on port ${port}`));
