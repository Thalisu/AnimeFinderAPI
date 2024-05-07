const getAnimeUrl = (curl) => {
  const getResultsRegex = /<article class="boxAN"[^>](.*?)<\/article>/g;
  const linkRegex = /<a\shref="([^"]*)">/;
  const titleRegex = /title="([^"]*)">/;

  const content = curl.match(getResultsRegex);
  const results = content.reduce((acc, x, i) => {
    const link = content[i].match(linkRegex)[1];
    const title = content[i].match(titleRegex)[1];
    return acc.concat({ value: link.substr(24), label: title });
  }, []);

  return results;
};

module.exports = getAnimeUrl;
