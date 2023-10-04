// Initialize the variables

const navbar = document.getElementById('navbar');
const menu = document.getElementById('menu');

// Set function for sticky navbar

window.onscroll = function() {
  if (window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add('sticky');
  }
  else {
    navbar.classList.remove('sticky');
  }
};