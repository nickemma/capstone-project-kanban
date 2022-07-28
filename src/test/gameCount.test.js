/**
 * @jest-environment jsdom
 */

const fetchMock = require('fetch-mock');

describe('async function', () => {
  it('should resolve after a time', async () => {
    fetchMock.mock('https://www.freetogame.com/api/games?category=shooter', {
      games: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    });
    const response = await fetch(
      'https://www.freetogame.com/api/games?category=shooter',
    );
    const data = await response.json();
    expect(data.games.length).toBe(4);
  });
});
