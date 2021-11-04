const qsa = document.querySelectorAll.bind(document);
const qs = document.querySelector.bind(document);
let cpuScore = 0
let userScore = 0;

const options = ['paper-plane', 'cut', 'hand-rock']

function checkWhoWon(user, cpu) {
  if (user === cpu) {
    return 2;
  }

  switch (user) {
    case 'paper-plane':
      if (cpu === 'cut') {
        return 0;
      }
      break;

    case 'cut':
      if (cpu === 'hand-rock') {
        return 0;
      }
      break;

    case 'hand-rock':
      if (cpu === 'paper-plane') {
        return 0;
      }
      break;

    default:
      break;
  }
  return 1;
}

function cpu_pick() {
  const choice = Math.floor(Math.random() * 3);
  const cpuChoice = qs('#computer-choice');
  let cpuPickImage = `<i class="fas fa-${options[choice]} user-choice" data-name="${options[choice]}"></i>`
  cpuChoice.innerHTML = cpuPickImage;
  return options[choice];
}

function user_pick() {
  const cpuScoreHtml = qs('#score-pc');
  const userScoreHtml = qs('#score-player');

  const result = qs('#result');
  const winner = checkWhoWon(this.dataset.name, cpu_pick());
  switch (winner) {
    case 0:
      cpuScoreHtml.innerText = ++cpuScore;
      result.innerText = 'You lose!';
      break;

    case 1:
      userScoreHtml.innerText = ++userScore;
      result.innerText = 'You have won!';
      break;

    default:
      result.innerText = 'You tied the game!';
      break;
  }
}


const possibleUserPick = qsa('.user-choice');
for (let i = 0; i < 3; i++) {
  possibleUserPick[i].addEventListener('click', user_pick);
}