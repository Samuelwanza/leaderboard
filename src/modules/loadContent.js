import scores from './getScores';

const loadContent = async () => {
  const gameScores = await scores();
  const scoresinput = document.getElementById('scores');
  gameScores.map((score) => {
    const li = document.createElement('li');
    li.textContent = `${score.user}:   ${score.score} `;
    scoresinput.appendChild(li);
    return li;
  });
};
export default loadContent;
