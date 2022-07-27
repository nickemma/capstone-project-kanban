const API_URL = 'https://www.freetogame.com/api/games?category=shooter';
const counter = document.querySelector('.counter');

const count = () => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      if (!data) return;
      for (let i = 0; i < 15; i += 1) {
        // eslint-disable-next-line consistent-return
        return counter;
      }
    });
};
count();
export default count;
