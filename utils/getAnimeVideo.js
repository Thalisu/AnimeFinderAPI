const getAnimeVideo = (curl) => {
  const getVideoRegex = /<iframe class="metaframe rptss" src="(.*?)"/;

  const video = curl.match(getVideoRegex)[1];

  return video;
};

module.exports = getAnimeVideo;
