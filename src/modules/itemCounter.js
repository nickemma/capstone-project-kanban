const API_URL = 'https://www.freetogame.com/api/games?category=shooter';
// const counter = document.querySelector('.counter');

const count = async () => {
  const games = await fetch(API_URL);
  const data = games.slice(0, 15).map((item) => item.id);
  document.querySelector('.counter').forEach((elem) => {
    elem.innerHTML = `${data.length}`;
  });
};

count();

export default count;

// count();

// const count = () => {
//   fetch(API_URL)
//     .then((res) => res.json())
//     .then((data) => {
//       if (!data) return;
//       for (let i = 0; i < 15; i += 1) {
//         // eslint-disable-next-line consistent-return
//         return counter;
//       }
//     });
// };
