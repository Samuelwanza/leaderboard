import './styles.css';
import createScore from './modules/createScore';
import loadContent from './modules/loadContent';

loadContent();

document.getElementById('refresh-button').addEventListener('click', () => {
  window.location.reload();
});
document.getElementById('submit-button').addEventListener('click', () => {
  const user = document.getElementById('user');
  const userscore = document.getElementById('userscore');
  if (user.value !== '' && userscore.value !== '') {
    createScore(user.value, userscore.value);
  }
});
