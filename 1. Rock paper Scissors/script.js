`use strict`;

const menu = document.querySelector(`.menu`);
const btnGroup = document.querySelector(`.btn-group`);

const rock = document.querySelector(`.rock`);
const paper = document.querySelector(`.paper`);
const scissors = document.querySelector(`.scissors`);

const rounds = document.querySelector(`.round`);
const start = document.querySelector(`.start`);
const again = document.querySelector(`.again`);
const score1 = document.querySelector(`.score1`);
const score2 = document.querySelector(`.score2`);

const close = document.querySelector(`.close`);
const close1 = document.querySelector(`.close1`);
const form = document.querySelector(`.form`);
const btnHome = document.querySelector(`.btn-home`);
const btnRefresh = document.querySelector(`.btn-ref`);
const btnPlay = document.querySelector(`.btn-play`);
const btnRule = document.querySelector(`.btn-rule`);
const btnDemo = document.querySelector(`.btn-demo`);
const btnRegister = document.querySelector(`.btn-signup`);
const rules = document.querySelector(`.rules`);

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

// The menu icon on the top left
menu.addEventListener(`click`, function () {
  btnGroup.classList.toggle(`hidden`);
});

btnHome.addEventListener(`click`, function () {
  btnGroup.classList.add(`hidden`);
});

btnRefresh.addEventListener(`click`, function () {
  refresh();
  score1.textContent = 0;
  score2.textContent = 0;
  rounds.textContent = 0;
  again.classList.add(`hidden`);
  start.classList.add(`hidden`);
  btnGroup.classList.add(`hidden`);
});

btnRegister.addEventListener(`click`, function () {
  form.classList.remove(`hidden`);
  btnGroup.classList.add(`hidden`);
});

btnRule.addEventListener(`mouseover`, function () {
  console.log(`hover`);
  rules.classList.toggle(`hidden`);
});
// closing the registartion` modal display`
close.addEventListener(`click`, function () {
  form.classList.add(`hidden`);
});
// Closing the rules `modal display`
close1.addEventListener(`click`, function () {
  rules.classList.add(`hidden`);
  btnGroup.classList.add(`hidden`);
});
