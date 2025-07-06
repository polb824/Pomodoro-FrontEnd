let workTimer = 1 * 60;
let breakTimer = 5 * 60;
let timeLeft = workTimer;
let timerInterval = null;
let isRunning = false;
let mode = "Work";

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");

const formatTime = (s) =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
    2,
    "0"
  )}`;

const updateDisplay = () => {
  timerDisplay.textContent = formatTime(timeLeft);
};

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  startBtn.disabled = true;
  pauseBtn.disabled = false;

  timerInterval = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      isRunning = false;
      startBtn.disabled = false;
      pauseBtn.disabled = true;

      if (mode === "Work") {
        mode = "Break";
        timeLeft = breakTimer;
        alert("Work session complete! Time for a break.");
      } else {
        mode = "Work";
        timeLeft = workTimer;
        alert("Break over! Back to work.");
      }

      updateDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  startBtn.textContent = "Resume";
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}
updateDisplay();

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  startBtn.textContent = "Start";
  startBtn.disabled = false;
  pauseBtn.disabled = true;

  timeLeft = mode === "Work" ? workTimer : breakTimer;
  updateDisplay();
}
