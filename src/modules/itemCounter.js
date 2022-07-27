const API_URL = 'https://www.freetogame.com/api/games?category=shooter';
const counter = document.querySelector('.counter');

const count = () => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 15; i += 1) {
        counter.textContent = data.i;
      }
    });
};
count();
export default count;
