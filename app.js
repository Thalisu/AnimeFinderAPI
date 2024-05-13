const express = require("express");
const animeRouter = require("./controllers/animeRouter");
const calendarRouter = require("./controllers/calendarRouter");
const recentsRouter = require("./controllers/recentsRouter");
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
app.use("/api/recents", recentsRouter);

module.exports = app;
