const calendarRouter = require("express").Router();

const fetchUrl = require("../utils/fetchUrls");
const { baseCalendarUrl } = require("../utils/config");
const getCalendar = require("../utils/getCalendar");

const baseUrl = baseCalendarUrl;

calendarRouter.get("/", async (req, res) => {
  try {
    const promises = [...Array(7)].map((x, i) => {
      return new Promise((resolve, reject) => {
        fetchUrl(`${baseUrl}calendario/day/${i}`)
          .then((data) => resolve(data))
          .catch((err) => reject(err));
      });
    });

    const data = await Promise.all(promises).then((d) => d);
    res.json(getCalendar(data)).end();
  } catch (error) {
    console.error(error);
    res.json([])
  }
});

module.exports = calendarRouter;
