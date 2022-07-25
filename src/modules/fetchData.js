const API_URL = 'https://www.freetogame.com/api/games?category=shooter';

const fetchData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);
};
fetchData();

export default fetchData;
