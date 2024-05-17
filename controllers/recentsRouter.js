const recentsRouter = require("express").Router();

const fetchUrl = require("../utils/fetchUrls");
const { baseUrl } = require("../utils/config");
const getRecents = require("../utils/getRecents");

recentsRouter.get("/", async (req, res) => {
  try {
    const data = await fetchUrl(`${baseUrl}home-2`);
    res.json(getRecents(data)).end();
  } catch (error) {
    console.error(error);
    res.json([]);
  }
});

module.exports = recentsRouter;
