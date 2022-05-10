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
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
