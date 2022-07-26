const API_URL = 'https://www.freetogame.com/api/games?category=shooter';
const cards = document.querySelector('.card-section');

const showData = (data) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');
  cardContainer.innerHTML = `
        <img
          src="${data.thumbnail}"
          class="card-image"
        />
        <div class="content">
          <div class="name-div">
            <h2>${data.title}</h2>
            <div class="likes">
              <i class="fa-solid fa-heart" id="love"></i>
              <span class="likes-info" id="516">4</span>
            </div>
          </div>
          <p class="description">
           ${data.short_description}
          </p>
          <button id="516" class="comment-btn">Comments</button>
        </div>
    `;
  cards.appendChild(cardContainer);
};

const fetchData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  for (let i = 0; i < 15; i += 1) {
    showData(data[i]);
  }
};

fetchData();

export default fetchData;
