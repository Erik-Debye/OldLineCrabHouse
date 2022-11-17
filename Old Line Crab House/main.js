'use strict';

//HomePage

//Move crab on scroll
//crab
const crab = document.querySelector('.crab-img');
const crabShow = document.querySelector('.crab-img-show');
const waves = document.querySelector('.waves');

window.addEventListener('scroll', (_) => {
  let scrolled = window.scrollY;

  if (scrolled) {
    crab.classList.add('scrolled');
    waves.classList.add('waves-opacity');
  } else {
    crab.classList.remove('scrolled');
    waves.classList.remove('waves-opacity');
  }
});
