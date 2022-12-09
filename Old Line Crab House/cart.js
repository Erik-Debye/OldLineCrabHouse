'use strict;';

const cartEl = document.querySelector('.cart');

let cart = retrieveCart();

refreshUI(cart);

//add event listener
cartEl.addEventListener('click', (e) => {
  //find the targeted btn
  if (e.target.id === 'increment-button' || e.target.id === 'decrement-button' || e.target.id === 'remove-button') {
    let button = e.target;
    let product = button.closest('.cart-obj');
    //define vars
    let itemNameEl = product.querySelector('.item-title');
    let itemCountEl = product.querySelector('.item-count');

    //find storeditem
    let storedItem = cart.find((obj) => {
      return obj.name === itemNameEl.innerHTML;
    });

    //increment logic
    if (e.target.id === 'increment-button') {
      let quantity = Number(itemCountEl.innerHTML) + 1;

      storedItem.amount = quantity;
      cart = cart.filter((obj) => {
        return obj.amount !== 0;
      });
    }
    //decrement logic
    else if (e.target.id === 'decrement-button') {
      let quantity = Number(itemCountEl.innerHTML) - 1;

      storedItem.amount = quantity;
    }
    //remove logic
    else {
      cart = cart.filter((obj) => {
        return obj.name !== itemNameEl.innerHTML;
      });
    }

    updateCart(cart);
    refreshUI(retrieveCart());
  }
});

//add checkout event
const checkout = document.querySelector('#checkout-button');

checkout.addEventListener('click', (_) => {
  //clear ui
  clearUI();
  cartEl.insertAdjacentHTML(
    'beforeend',
    '<h2 class="mt-lg">Thank you!</h2><h3>Your items will ship soon!</h3><a class="link-btn" href="./index.html">Return to Home</a>'
  );
});

function retrieveCart() {
  return JSON.parse(localStorage.getItem('storedCart'));
}

function updateCart(arr) {
  localStorage.setItem('storedCart', JSON.stringify(arr));
}

function refreshUI(arr) {
  clearUI();

  cartEl.insertAdjacentHTML('beforeend', '<h1 class="mt-lg">Your Cart</h1>');

  if (arr.length === 0 || arr === null) {
    cartEl.style.gap = '1.5rem';
    cartEl.insertAdjacentHTML(
      'beforeend',
      '<h2>Your Cart is Empty!</h2><h3>Head back to our Merch page to add some cool stuff to your cart!</h3><a class="link-btn" href="./merch.html">Get Merch Now!</a>'
    );
  } else {
    arr.forEach((cartItem) => {
      const cartCard = `<div class="cart-obj">
        <div class="cart-item">
          <div class="cart-wrapper">
            <img src="${cartItem.img}" alt="Product 1" />
            <div>
              <h3 class="item-title">${cartItem.name}</h3>
              <h5>Price: <span class="item-price">$${getPrice(cartItem.price, cartItem.amount)}</span></h5>
            </div>
          </div>
          <div class="cart-options">
            <div class="flex-hz-wrapper">
              <button id="decrement-button">-</button>
              <span id="item-count" class="item-count">${cartItem.amount}</span>
              <button id="increment-button">+</button>
            </div>
            <button id="remove-button" class="remove-item link-btn">Remove</button>
          </div>
        </div>
      </div>`;

      cartEl.insertAdjacentHTML('beforeend', cartCard);
    });

    let total = getTotalPrice(arr);

    cartEl.insertAdjacentHTML(
      'beforeend',
      `<div class="checkout"><h2>Total:<span id='checkout-price'>$${total}</span></h2><button class='link-btn' id='checkout-button'>Check Out</button></div>`
    );
  }
}

function getPrice(string, number) {
  const price = +string.slice(1) * number;
  return price;
}

function getTotalPrice(arr) {
  let price = 0;
  arr.forEach((obj) => {
    price += getPrice(obj.price, obj.amount);
  });
  return price;
}

function clearUI() {
  cartEl.replaceChildren();
}
