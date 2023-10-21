const state = {
  view: {
    boxes: document.querySelectorAll('.cardBoxWindow'),
    enemy: document.querySelectorAll('.wreck'),
    timeLeft: document.querySelector('#time-left'),
    score: document.querySelector('#score'),
  },
  values: {
    timerId: null,
    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
    currentTime: 60,
  },
  actions: {
    countDownTimerId: setInterval(countDown, 1000),
  },
};

function playSound (audioName) {
  let audio = new Audio(`./src/audio/${audioName}.m4a`);
  audio.volume = 0.2;
  audio.play();
}

function countDown() {
  state.values.currentTime--;
  state.view.timeLeft.textContent = state.values.currentTime;

  if (state.values.currentTime <= 0) {
    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.values.timerId);
    alert("Game Over! O seu resultado foi: " + state.values.result);
  }
}


function randomCard() {
  state.view.boxes.forEach((cardBoxWindow) => {
    cardBoxWindow.classList.remove('wreck');
  });

  let randomNumber = Math.floor(Math.random() * 9)
  let randomBox = state.view.boxes[randomNumber]
  randomBox.classList.add('wreck');
  state.values.hitPosition = randomBox.id;
}

function moveEnemy() {
  state.values.timerId = setInterval(randomCard, state.values.gameVelocity);
}

function addListenerHitBox() {
  state.view.boxes.forEach((cardBoxWindow) => {
    cardBoxWindow.addEventListener("mousedown", () => {
      if ( cardBoxWindow.id === state.values.hitPosition ) {
        state.values.result++;
        state.view.score.textContent = state.values.result;
        state.values.hitPosition = null;
        playSound(nomedotoque);
      }
    });
  });
}

function init() {
  moveEnemy()
  addListenerHitBox();
}

init()
