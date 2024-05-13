const getAnimeUrl = (html) => {
  const getResultsRegex = /<article class="boxAN"[^>](.*?)<\/article>/g;
  const linkRegex = /<a\shref="([^"]*)">/;
  const titleRegex = /title="([^"]*)">/;

  const content = html.match(getResultsRegex) || [];
  const results = content.reduce((acc, x, i) => {
    const link = content[i].match(linkRegex)[1].substr(24);
    const title = content[i].match(titleRegex)[1];
    return acc.concat({ value: link, label: title });
  }, []);

  return results;
};

module.exports = getAnimeUrl;
