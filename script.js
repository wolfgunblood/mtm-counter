let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
  document.getElementById("startBtn").disabled = true;
  document.getElementById("stopBtn").disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector(".timer").textContent = "00:00:00";
  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
}

function updateTimer() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const displaySeconds = padTime(seconds);
  const displayMinutes = padTime(minutes);
  const displayHours = padTime(hours);

  document.querySelector(".timer").textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}
