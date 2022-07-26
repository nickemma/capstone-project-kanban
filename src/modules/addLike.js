const likes = document.querySelector('.card-section');
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9ST6EsEV41gcCvlbOfZ/likes';

const addLike = () => {
  likes.addEventListener('click', (e) => {
    const clicked = e.target.closest('.add-like');
    if (!clicked) return;
    const item = clicked.getAttribute('id');
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Accept: 'application/json',
      },
      body: JSON.stringify({
        item_id: item,
      }),
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const likesInfo = document.querySelector(`.likes-${item}`);
        likesInfo.querySelector('span').textContent = data.filter(
          (items) => items.item_id === item,
        )[0].likes;
      });
  });
};

export default addLike;
