import url from './gameData';

const createScore = async (user, score) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
  const data = await response.json();
  return data;
};
export default createScore;
