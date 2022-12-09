'use strict';

const counts = document.querySelectorAll('.item-count');

const productList = document.getElementById('product-list');
const decrementButton = document.getElementById('decrement-button');
const incrementButton = document.getElementById('increment-button');

let cart = JSON.parse(localStorage.getItem('storedCart')) || [];

window.onload = () => {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach((productCard) => {
    let productTitle = productCard.querySelector('.product-title').innerText;
    let match = cart.find((obj) => obj.name === productTitle);

    if (match) {
      let priceEl = productCard.querySelector('.item-count');
      priceEl.textContent = match.amount;
    }
  });
};

productList.addEventListener('click', (event) => {
  if (event.target.matches('#decrement-button') || event.target.matches('#increment-button')) {
    const productCard = event.target.closest('.product-card');
    const productPicture = productCard.querySelector('.product-picture').src;
    const productTitle = productCard.querySelector('.product-title').innerText;
    const productPrice = productCard.querySelector('.product-price').innerText;
    const itemCount = productCard.querySelector('#item-count');

    if (event.target.matches('#decrement-button')) {
      let amount = Number(itemCount.innerText);
      amount > 0 ? (amount -= 1) : (amount = 0);
      itemCount.innerText = amount;

      let newItem = { name: productTitle, amount: amount, price: productPrice, img: productPicture };

      let oldItem = cart.find((obj) => {
        return obj.name === newItem.name;
      });

      if (oldItem) {
        oldItem.amount = newItem.amount;
      } else {
        cart.push(newItem);
      }
    } else {
      //target is increment
      let amount = Number(itemCount.innerText) + 1;
      itemCount.innerText = amount;

      let newItem = { name: productTitle, amount: amount, price: productPrice, img: productPicture };

      let oldItem = cart.find((obj) => {
        return obj.name === newItem.name;
      });

      if (oldItem) {
        oldItem.amount = newItem.amount;
      } else {
        cart.push(newItem);
      }
    }

    cart = cart.filter((obj) => {
      return obj.amount !== 0;
    });
    localStorage.setItem('storedCart', JSON.stringify(cart));
  }
});
