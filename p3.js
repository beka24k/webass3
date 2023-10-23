var timeInput = document.getElementsByClassName("time")[0];
var countdownEls = document.getElementsByClassName("countdown");
let interval;

function startCountdown() {
  var inputTime = parseInt(timeInput.value);
  if (isNaN(inputTime) || inputTime <= 0) {
    countdownEls[0].innerHTML = "Doesnt correct time";
    return;
  }

  interval = setInterval(updateCount, 1000);
  function updateCount() {
    if (inputTime <= 0) {
      clearInterval(interval);
      countdownEls[0].innerHTML = "Time is done";
    } else {
      const minutes = Math.floor(inputTime / 60);
      let seconds = inputTime % 60;
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      countdownEls[0].innerHTML = `${minutes}:${seconds}`;
      inputTime--;
    }
  }
}
function resetCountdown() {
  clearInterval(interval);
  timeInput.value = "";
  countdownEls[0].innerHTML = "";
}
