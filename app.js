const express = require("express");
const animeRouter = require("./controllers/animeRouter");
const calendarRouter = require("./controllers/calendarRouter");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

app.use("/api/anime", animeRouter);
app.use("/api/calendar", calendarRouter);

module.exports = app;
