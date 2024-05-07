const fetchUrl = async (url) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(url, requestOptions).then((response) =>
    response.text()
  );
  return response;
};

module.exports = fetchUrl;
