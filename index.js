
// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start(){

//     if(isRunning){
//         startTime = Date.now() - elapsedTime;
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }

// }

// function stop(){

// }

// function reset(){

// }

// function update(){

//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime;

//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
//     let seconds = Math.floor(elapsedTime / 1000 % 60);
//     let milliseconds = Math.floor(elapsedTime % 1000 / 10);

//     display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
// }

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) { // Only start if timer is not already running
    startTime = Date.now();
    timer = setInterval(update, 10); // Update every 10 milliseconds
    isRunning = true;
  }
}

function stop() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  isRunning = false;
}

function reset() {
  startTime = Date.now();
  elapsedTime = 0;
  update(); // Update display to reflect reset time
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime; // Update elapsedTime here

  // Format time with leading zeros for aesthetic consistency
  let hours = elapsedTime.toString().padStart(2, '0').slice(0, 2);  // Extract hours (max 2 digits)
  let minutes = elapsedTime.toString().padStart(2, '0').slice(2, 4);  // Extract minutes (2 digits)
  let seconds = elapsedTime.toString().padStart(2, '0').slice(4, 6);  // Extract seconds (2 digits)
  let milliseconds = elapsedTime.toString().padStart(3, '0').slice(6); // Extract milliseconds (3 digits)

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
