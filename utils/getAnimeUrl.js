const getAnimeUrl = (html) => {
  const getResultsRegex = /<article class="boxAN"[^>](.*?)<\/article>/g;
  const linkRegex = /<a\shref="([^"]*)">/;
  const titleRegex = /title="([^"]*)">/;
  const imgRegex = /<img\ssrc="([^"]*)"/;

  const content = html.match(getResultsRegex) || [];

  const results = content.reduce((acc, x, i) => {
    const link = content[i].match(linkRegex)[1].substr(24);
    const title = content[i].match(titleRegex)[1];
    const img = content[i].match(imgRegex)[1];
    return acc.concat({ value: link, label: title, img });
  }, []);

  return results;
};

module.exports = getAnimeUrl;
