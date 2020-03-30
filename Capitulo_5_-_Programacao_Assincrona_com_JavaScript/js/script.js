window.addEventListener('load', function() {
  // const timer = document.querySelector('#timer');
  // let count = 0;

  // const interval = setInterval(() => {
  //   timer.textContent = ++count;
    
  //   if (count === 10) {
  //     this.clearInterval(interval);
  //     return;
  //   }

  //   if (count % 5 === 0) {
  //     setTimeout(() => {
  //       timer.textContent = count + ',5';
  //     }, 500);
  //   }
  // }, 1000);

  configEventButtons();

});

let timer = null;
let intervalId = null;

function configEventButtons() {
  timer = document.querySelector('#timer');
  let startButton = document.querySelector('#start');
  let stopButton = document.querySelector('#stop');
  startButton.addEventListener('click', start);
  stopButton.addEventListener('click', stop);
}

function start() {
  let count = 0;
  intervalId = setInterval(()=>{
    timer.textContent = ++count;
  }, 1000);
}

function stop() {
  clearInterval(intervalId);
}
