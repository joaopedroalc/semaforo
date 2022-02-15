const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

function start() {
  red.classList.add('active')
  setTimeout(function () {
    yellow.classList.add('active')
  },2000)

  setTimeout(function () {
    green.classList.add('active')
  },4000)
}

// if(red.classList.contains('active') && yellow.classList.contains('active') && green.classList.contains('active')){
//   red.classList.remove('active')
//   yellow.classList.remove('active')
//   green.classList.remove('active')

//   setTimeout(function () {
//     start()
//   },5000)
// }

function color(color) {
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