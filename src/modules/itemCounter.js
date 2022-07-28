const API_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0123393eeamsh1bee10a3a220057p1fbee7jsn7ef939fd62ca',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};
const count = async () => {
  const games = await fetch(API_URL, options);
  const data = games.slice(0, 15).map((item) => item.id);
  document.querySelector('.counter').forEach((elem) => {
    elem.innerHTML = `${data.length}`;
  });
};

count();

export default count;
