const getJSON = async (url) => {
  const response = await fetch(url);
  if (!response.ok)
    // check if response worked (no 404 errors etc...)
    throw new Error(response.statusText);

  const data = response.json(); // get JSON from the response
  return data; // returns a promise, which resolves to this data value
};

console.log("Fetching data...");
getJSON("https://premierleagueapi.herokuapp.com/news")
  .then((data) => {
    //console.log(data);

    data.forEach((datum) => {
      // create a new div for each news item
      const card = createCard(datum.title, datum.url, datum.source);
      document.body.appendChild(card);
    });
  })
  .catch((error) => {
    console.error(error);
  });

const createCard = (title, url, source) => {
  const card = document.createElement("div");
  const cardlink = document.createElement("a");
  const cardtitle = document.createElement("h2");
  const cardsource = document.createElement("h3");

  card.appendChild(cardlink);
  cardlink.appendChild(cardtitle);
  cardlink.appendChild(cardsource);

  cardtitle.innerText = title;
  cardlink.href = url;
  cardsource.innerText = source;

  return card;
};
