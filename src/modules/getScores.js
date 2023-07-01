import url from './gameData';

const scores = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
};
export default scores;
