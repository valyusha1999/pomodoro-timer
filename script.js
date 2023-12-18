const timer = document.getElementById("pomodoro-time");
const buttonStart = document.getElementById("start");
const buttonBreak = document.getElementById("break");
let text = timer.textContent;
const m = +text.split(':')[0];
const s = +text.split(':')[1]
let time = m * 60 + s;

let interval;

function countdown() {
  let minutes = Math.floor(time / 60);
  let second = time % 60;
  if (second < 10) {
    second = `0` + second;
  };
  if (minutes < 10) {
    minutes = `0` + minutes;
  };
  
  timer.innerHTML = `${minutes}:`+`${second}`;
  time--;
  if (time < 0) {
    clearInterval(interval);
  }
};


function startStop() {
  if (buttonStart.textContent == "start") {
    interval = setInterval(countdown, 100);
    buttonStart.textContent = "stop";
  } else {
    clearInterval(interval);
    buttonStart.textContent = "start";
  };
};

buttonStart.addEventListener('click',startStop);

