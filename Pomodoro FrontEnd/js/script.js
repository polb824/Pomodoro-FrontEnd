let timeLeft = 25 * 60;
let timerInterval = null;
let isRunning = false;

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
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      isRunning = false;
      startBtn.disabled = false;
      pauseBtn.disabled = true;
      alert("Session complete!");
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
