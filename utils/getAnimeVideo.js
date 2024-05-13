const getAnimeVideo = (html) => {
  const getVideoRegex = /<iframe class="metaframe rptss" src="(.*?)"/;

  const video = html.match(getVideoRegex)[1];

  return video;
};

module.exports = getAnimeVideo;
