import countComment from './countComment.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9ST6EsEV41gcCvlbOfZ/comments';
const comments = document.querySelector('.content');

const addComment = () => {
  comments.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitted = e.target.closest('.form');
    const item = submitted.dataset.getComment;
    const userValue = submitted.querySelector('#name').value;
    const textArea = submitted.querySelector('#description').value;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        item_id: item,
        username: userValue,
        comment: textArea,
      }),
    });
    fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9ST6EsEV41gcCvlbOfZ/comments?item_id=${item}`,
    )
      .then((res) => res.json())
      .then((data) => {
        const comments = document.querySelector('.comments');
        comments.innerHTML = '';
        data.forEach((comment) => {
          const li = document.createElement('li');
          li.innerHTML = `
          <p>${comment.comment} by ${comment.username}</p>
        `;
          comments.appendChild(li);
          return countComment(data);
        });
      });
  });
};

export default addComment;
