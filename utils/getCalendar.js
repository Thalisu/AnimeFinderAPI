const { baseCalendarUrl } = require("./config");

const getCalendar = (dataArray) => {
  const getCardContainer =
    /<ul(?!.*?<ul).*?>.*?<div.*?conte.*?-.*?me.*?(?:(?!<\/ul>).)*<\/ul>/;
  const getCards = /<li.*?>.*?<\/li>/g;
  const getImg = /<img.*?src="(.*?)"/;
  const getTitle = /class="title">(.*?)</;

  const data = dataArray.reduce((acc, curl, i) => {
    if (curl instanceof Error) {
      throw new Error(curl);
    }
    const day =
      i === 0
        ? "Domingo"
        : i === 1
        ? "Segunda"
        : i === 2
        ? "Terça"
        : i === 3
        ? "Quarta"
        : i === 4
        ? "Quinta"
        : i === 5
        ? "Sexta"
        : "Sabado";
    const cardContainer = curl.match(getCardContainer);

    console.log(cardContainer[0]);
    const cards = cardContainer[0].match(getCards);

    const data = cards.reduce((acc, c) => {
      console.log(c);
      const img = `${baseCalendarUrl}${c
        .match(getImg)[1]
        .replaceAll("amp;", "")}`;
      const title = c.match(getTitle)[1];
      return acc.concat({ img, title });
    }, []);

    return acc.concat({ day, data });
  }, []);

  return data;
};

module.exports = getCalendar;
