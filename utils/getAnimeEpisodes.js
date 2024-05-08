const animeEpsParser = (ep) => {
  const replaceNonNumbers = Number(ep.replace(/(ep)*\s*/g, ""));
  const parsedEp = isNaN(replaceNonNumbers) ? "" : replaceNonNumbers;
  return parsedEp;
};

const getAnimeEpisodes = (curl) => {
  const getResultsRegex = /<ul class="listaEps">(.*?)<\/ul>/;
  const getLiRegex = /<li>(.*?)<\/li>/g;
  const getEpRegex = /<a id="([^"]*)" href="([^"]*)"/;

  const episodeContainer = curl.match(getResultsRegex)[1];
  const li = episodeContainer.match(getLiRegex) || [];
  const results = li.reduce((acc, x, i) => {
    const [all, ep, link] = li[i].match(getEpRegex);
    const parsedEp = animeEpsParser(ep);

    if (parsedEp !== "") {
      return acc.concat({
        label: parsedEp,
        value: link.substr(18),
      });
    }
    return acc;
  }, []);

  return results;
};

module.exports = getAnimeEpisodes;
