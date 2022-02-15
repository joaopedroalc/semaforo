const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

let time = 0;

function start() {
  red.classList.add('active')
  setTimeout(function () {
    yellow.classList.add('active')
  },1000)

  setTimeout(function () {
    green.classList.add('active')
  },2000)

  time = setTimeout(function reiniciar() {
    red.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
  
    start()
  },3000)
}

function color(color) {
  red.classList.remove('active')
  yellow.classList.remove('active')
  green.classList.remove('active')

  clearTimeout(time)

  switch (color) {
    case 'red':
      red.classList.add('active')
      break;
    case 'yellow':
      yellow.classList.add('active')
      break;
    case 'green':
      green.classList.add('active')
  }
}