const getRecents = (html) => {
  const getRecentBoxRegex = /Últimos\sEp.*?<div\sclass="post(.*?)<\/a><\/div>/;
  const getArticlesRegex = /<article.*?>.*?<\/article>/g;
  const getTitle = /div\sclass="title">(.*?)<\/div>/;
  const getEpTitle = /div\sclass="titleEP">(.*?)<\/div>/;
  const getLinkRegex = /<a\shref="([^"]*)">/;
  const imgRegex = /<img\ssrc="([^"]*)"/;

  const articles = html.match(getRecentBoxRegex)[0].match(getArticlesRegex);

  const eps = articles.reduce((acc, a) => {
    let title = a.match(getTitle)[1];
    if (title.length > 50) {
      title = title.substring(0, 60);
    }

    const epTitle = a.match(getEpTitle)[1];
    const label = `${title} - ${epTitle}`;
    const link = a.match(getLinkRegex)[1].substr(18);
    const img = a.match(imgRegex)[1];
    return acc.concat({ label, value: link, img });
  }, []);
  return eps;
};

module.exports = getRecents;
