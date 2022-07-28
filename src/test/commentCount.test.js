/**
 * @jest-environment jsdom
 */
const fetchMock = require('fetch-mock');

describe('async function', () => {
  it('should resolve after a time', async () => {
    fetchMock.mock(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9ST6EsEV41gcCvlbOfZ/comments',
      {
        comment: [
          { id: 1, comment: 'This is a comment' },
          { id: 2, comment: 'This is a comment' },
          { id: 3, comment: 'This is a comment' },
          { id: 4, comment: 'This is a comment' },
        ],
      },
    );
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9ST6EsEV41gcCvlbOfZ/comments',
    );
    const data = await response.json();
    expect(data.comment.length).toBe(4);
  });
});
