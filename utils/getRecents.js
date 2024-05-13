const getRecents = (html) => {
  getRecentBoxRegex = /Últimos\sEp.*?<div\sclass="post(.*?)<\/a><\/div>/;
  getArticlesRegex = /<article.*?>.*?<\/article>/g;
  getTitle = /div\sclass="title">(.*?)<\/div>/;
  getEpTitle = /div\sclass="titleEP">(.*?)<\/div>/;

  const articles = html.match(getRecentBoxRegex)[0].match(getArticlesRegex);
  console.log(articles);

  const eps = articles.reduce((acc, a) => {
    const title = a.match(getTitle)[1];
    const epTitle = a.match(getEpTitle)[1];
    return acc.concat({ title, epTitle });
  }, []);
  return eps;
};

module.exports = getRecents;
