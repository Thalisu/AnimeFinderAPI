const fetchUrl = async (url) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  try {
    const response = await fetch(url, requestOptions).then((response) =>
      response.text()
    );
    return response;
  } catch (err) {
    return new Error(err);
  }
};

module.exports = fetchUrl;
