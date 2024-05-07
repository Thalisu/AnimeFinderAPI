const express = require("express");
const getAnimeRouter = require("./controllers/getAnime");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

app.use("/api", getAnimeRouter);

module.exports = app;
