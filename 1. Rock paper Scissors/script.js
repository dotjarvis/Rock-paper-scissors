`use strict`;

const rock = document.querySelector(`.rock`);
const paper = document.querySelector(`.paper`);
const scissors = document.querySelector(`.scissors`);

const rounds = document.querySelector(`.round`);
const overlay = document.querySelector(`.overlay`);

const start = document.querySelector(`.start`);
const again = document.querySelector(`.again`);
const score1 = document.querySelector(`.score1`);
const score2 = document.querySelector(`.score2`);

const randomImg = document.querySelector(`.player2-img`);
const imageName = document.querySelector(`.player2-pick`);
const choise = document.querySelector(`.player1-imgName`);
const images = document.querySelectorAll(`.image`);
const picked = document.querySelector(`.player1-imgName`);
const winning = document.querySelector(`.winning-class`);

// Images to be used in THE PLAY
let image1;
let image2;

let wins = 0;
let loss = 0;

// Initializing the scores and rounds to zero
score1.textContent = 0;
score2.textContent = 0;
rounds.textContent = 0;

// selecting random image for player 2
const display = function () {
  const randomImage = Math.trunc(Math.random() * 3) + 1;
  randomImg.src = `img${randomImage}.png`;

  // Updating oppponent's Image
  if (randomImage === 1) {
    imageName.textContent = `Opponent chose Rock`;
    image2 = `rock`;
  } else if (randomImage === 2) {
    imageName.textContent = `Opponent chose Paper`;
    image2 = `paper`;
  } else {
    imageName.textContent = `Opponent chose Scissors`;
    image2 = `scissors`;
  }
};

// Player1 image manipulation
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener(`click`, function () {
    if (images[i].classList.contains(`rock`)) {
      picked.textContent = `You chose Rock`;
      paper.classList.add(`disappear`);
      scissors.classList.add(`disappear`);
      image1 = `rock`;
      display();
      compare(image1, image2);
      winPlayer();
      again.classList.remove(`hidden`);
    } else if (images[i].classList.contains(`paper`)) {
      picked.textContent = `You chose Paper`;
      rock.classList.add(`disappear`);
      scissors.classList.add(`disappear`);
      image1 = `paper`;
      display();
      compare(image1, image2);
      winPlayer();
      again.classList.remove(`hidden`);
      clicked = true;
    } else {
      picked.textContent = `You chose Scissors`;
      rock.classList.add(`disappear`);
      paper.classList.add(`disappear`);
      image1 = `scissors`;
      display();
      compare(image1, image2);
      winPlayer();
      again.classList.remove(`hidden`);
    }
  });
}

// Refresh function used in again and start over
function refresh() {
  rounds.textContent++;
  paper.classList.remove(`disappear`);
  rock.classList.remove(`disappear`);
  scissors.classList.remove(`disappear`);
  picked.textContent = ` `;
  imageName.textContent = ` `;
  winning.textContent = ` `;
  randomImg.src = `img5.png`;
}

// Logics of the game
const compare = function (obj1, obj2) {
  if (obj1 === `rock` && obj2 === `rock`) {
    return (winning.textContent = `DRAW`);
  } else if (obj1 === `rock` && obj2 === `paper`) {
    score2.textContent++;
    loss += 1;
    return (winning.textContent = `LOSS`);
  } else if (obj1 === `rock` && obj2 === `scissors`) {
    score1.textContent++;
    wins += 1;
    return (winning.textContent = `WIN`);
  } else if (obj1 === `paper` && obj2 === `rock`) {
    score1.textContent++;
    wins += 1;
    return (winning.textContent = `WIN`);
  } else if (obj1 === `paper` && obj2 === `paper`) {
    return (winning.textContent = `DRAW`);
  } else if (obj1 === `paper` && obj2 === `scissors`) {
    score2.textContent++;
    loss += 1;
    return (winning.textContent = `LOSS`);
  } else if (obj1 === `scissors` && obj2 === `rock`) {
    score2.textContent++;
    loss += 1;
    return (winning.textContent = `LOSS`);
  } else if (obj1 === `scissors` && obj2 === `paper`) {
    score1.textContent++;
    wins += 1;
    return (winning.textContent = `WIN`);
  } else if (obj1 === `scissors` && obj2 === `scissors`) {
    return (winning.textContent = `DRAW`);
  }
};
// resetting upon clicking again.
again.addEventListener(`click`, function () {
  refresh();
});
again.classList.remove(`disappear`);

// Decleare the winner
function winPlayer() {
  if (wins === 3) {
    start.classList.remove(`hidden`);
    startover();
  } else if (loss === 3) {
    start.classList.remove(`hidden`);
    startover();
  }
}

// start over after declaring winner
function startover() {
  start.addEventListener(`click`, function () {
    refresh();
    score1.textContent = 0;
    score2.textContent = 0;
    rounds.textContent = 0;
    again.classList.toggle(`hidden`);
    start.classList.add(`hidden`);
  });
}
