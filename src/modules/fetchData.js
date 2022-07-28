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
            <div class="likes likes-${data.id}">
              <i class="fa-solid fa-heart add-like" id="${data.id}"></i>
              <span class="likes-info ${data.id}" id="${data.id}">4</span>
            </div>
          </div>
          <p class="description">
           ${data.short_description}
          </p>
          <button id="${data.id}" class="comment-btn">Comments</button>
        </div>
    `;
  cards.appendChild(cardContainer);
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9ST6EsEV41gcCvlbOfZ/likes',
  )
    .then((res) => res.json())
    .then((getData) => {
      const likesFilter = getData.filter(
        (items) => items.item_id === `${data.id}`,
      )[0].likes;
      if (!likesFilter) return;
      const likesInfo = document.querySelector(`.likes-${data.id}`);
      likesInfo.querySelector('span').textContent = likesFilter;
    });
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
