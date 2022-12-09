'use strict';

//MOBILE MENU
const body = document.querySelector('body');
const menuIco = document.querySelector('.mobile-menu');
const menu = document.querySelector('.mobile-list');
const topLine = document.querySelector('.line--1');
const centerLine = document.querySelector('.line--2');
const lastLine = document.querySelector('.line--3');

menuIco.addEventListener('click', (_) => {
  topLine.classList.toggle('change--1');
  centerLine.classList.toggle('change--2');
  lastLine.classList.toggle('change--3');
  menu.classList.toggle('mobile-list-show');
  body.classList.toggle('fixed');
});



///###This is for the merch page /////

//need to access ls here to save added cart products. 'storage' event
