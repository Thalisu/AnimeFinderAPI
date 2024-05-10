const animeRouter = require("express").Router();

const getAnimeUrl = require("../utils/getAnimeUrl");
const getAnimeEpisodes = require("../utils/getAnimeEpisodes");
const getAnimeVideo = require("../utils/getAnimeVideo");

const fetchUrl = require("../utils/fetchUrls");
const { baseUrl } = require("../utils/config");

animeRouter.get("/search/:anime", async (req, res) => {
  const anime = req.params.anime;
  const data = await fetchUrl(`${baseUrl}?s=${anime}`);

  res.json(getAnimeUrl(data)).end();
});

animeRouter.get("/eps/:anime", async (req, res) => {
  const anime = req.params.anime;
  const data = await fetchUrl(`https://goyabu.to/anime/${anime}`);

  res.json(getAnimeEpisodes(data)).end();
});

animeRouter.get("/see/:code", async (req, res) => {
  const code = req.params.code;
  const data = await fetchUrl(`https://goyabu.to/${code}`);

  res.json(getAnimeVideo(data)).end();
});

module.exports = animeRouter;
