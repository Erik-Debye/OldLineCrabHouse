//menu
'use strict';

const seafood = document.querySelector('#seafood');
const landfood = document.querySelector('#landfood');
const veggie = document.querySelector('#veggie');
const drinks = document.querySelector('#drinks');
const dessert = document.querySelector('#dessert');

seafood.addEventListener('mouseenter', (_) => {
  let img = document.querySelector('#seafood-img');
  img.style.display = 'block';
  img.style.opacity = .6;
});
seafood.addEventListener('mousemove', (e) => {
  trackMouse(e, seafood);
});
seafood.addEventListener('mouseleave', (_) => {
  let img = document.querySelector('#seafood-img');
  img.style.display = 'none';
  img.style.opacity = 0;
  img.style.top = 330;
  img.style.left = 800;
});

landfood.addEventListener('mouseenter', (_) => {
  let img = document.querySelector('#landfood-img');
  img.style.display = 'block';
  img.style.opacity = .8;
});
landfood.addEventListener('mousemove', (e) => {
  trackMouse(e, landfood);
});
landfood.addEventListener('mouseleave', (_) => {
  let img = document.querySelector('#landfood-img');
  img.style.display = 'none';
  img.style.opacity = 0;
  img.style.top = 330;
  img.style.left = 800;
});

veggie.addEventListener('mouseenter', (_) => {
  let img = document.querySelector('#veggie-img');
  img.style.display = 'block';
  img.style.opacity = .8;
});
veggie.addEventListener('mousemove', (e) => {
  trackMouse(e, veggie);
});
veggie.addEventListener('mouseleave', (_) => {
  let img = document.querySelector('#veggie-img');
  img.style.display = 'none';
  img.style.opacity = 0;
  img.style.top = 330;
  img.style.left = 800;
});

drinks.addEventListener('mouseenter', (_) => {
  let img = document.querySelector('#drinks-img');
  img.style.display = 'block';
  img.style.opacity = .8;
});
drinks.addEventListener('mousemove', (e) => {
  trackMouse(e, drinks);
});
drinks.addEventListener('mouseleave', (_) => {
  let img = document.querySelector('#drinks-img');
  img.style.display = 'none';
  img.style.opacity = 0;
  img.style.top = 330;
  img.style.left = 800;
});

dessert.addEventListener('mouseenter', (_) => {
  let img = document.querySelector('#dessert-img');
  img.style.display = 'block';
  img.style.opacity = .8;
});
dessert.addEventListener('mousemove', (e) => {
  trackMouse(e, dessert);
});
dessert.addEventListener('mouseleave', (_) => {
  let img = document.querySelector('#dessert-img');
  img.style.display = 'none';
  img.style.opacity = 0;
  img.style.top = 330;
  img.style.left = 800;
});

function trackMouse(e, item) {
  let img = document.querySelector(`#${item.id}-img`);
  const { top, left, height, width } = item.getBoundingClientRect();
  const { clientX, clientY } = e;
  switch (item.id) {
    case 'seafood': {
      img.style.top = `${clientY - (top - 315)}px`;
      img.style.left = `${clientX - (left + 315 / 2)}px`;
      break;
    }
    case 'landfood': {
      img.style.top = `${clientY - (top - (315 + (height + 60)))}px`;
      img.style.left = `${clientX - (left + 315 / 2)}px`;
      break;
    }
    case 'veggie': {
      img.style.top = `${clientY - (top - (315 + (height + 60) * 2))}px`;
      img.style.left = `${clientX - (left + 315 / 2)}px`;
      break;
    }
    case 'drinks': {
      img.style.top = `${clientY - (top - (315 + (height + 60) * 3))}px`;
      img.style.left = `${clientX - (left + 315 / 2)}px`;
      break;
    }
    case 'dessert':
    default: {
      img.style.top = `${clientY - (top - (315 + (height + 60) * 4))}px`;
      img.style.left = `${clientX - (left + 315 / 2)}px`;
      break;
    }
  }
  if (clientX < left || clientY < top || clientX > left + width || clientY > top + height) {
    img.style.display = 'none';
    img.style.opacity = 0;
    img.style.top = 330;
    img.style.left = 800;
  }
}

//onclicks (seperate b/c above adds collasped menu to .menu, adding the event lisstners to the content that needs w/o)
document.querySelector('#seafood').addEventListener('click', (e) => {
  e.preventDefault();

  //collaspe menu
  document.querySelector('#seafood').classList.add('collapsed');
  //show content
  document.querySelector('.all-seafood').classList.remove('collapsed');

  //add listener on new titlw
  document.querySelector('#all-seafood-title').addEventListener('click', (e) => {
    e.preventDefault();

    //collaspe menu
    document.querySelector('#seafood').classList.remove('collapsed');
    //show content
    document.querySelector('.all-seafood').classList.add('collapsed');
  });
});

document.querySelector('#landfood').addEventListener('click', (e) => {
  e.preventDefault();

  //collaspe menu
  document.querySelector('#landfood').classList.add('collapsed');
  //show content
  document.querySelector('.all-landfood').classList.remove('collapsed');

  //add listener on new titlw
  document.querySelector('#all-landfood-title').addEventListener('click', (e) => {
    e.preventDefault();

    //collaspe menu
    document.querySelector('#landfood').classList.remove('collapsed');
    //show content
    document.querySelector('.all-landfood').classList.add('collapsed');
  });
});

document.querySelector('#veggie').addEventListener('click', (e) => {
  e.preventDefault();

  //collaspe menu
  document.querySelector('#veggie').classList.add('collapsed');
  //show content
  document.querySelector('.all-veggie').classList.remove('collapsed');

  //add listener on new titlw
  document.querySelector('#all-veggie-title').addEventListener('click', (e) => {
    e.preventDefault();

    //collaspe menu
    document.querySelector('#veggie').classList.remove('collapsed');
    //show content
    document.querySelector('.all-veggie').classList.add('collapsed');
  });
});

document.querySelector('#drinks').addEventListener('click', (e) => {
  e.preventDefault();

  //collaspe menu
  document.querySelector('#drinks').classList.add('collapsed');
  //show content
  document.querySelector('.all-drinks').classList.remove('collapsed');

  //add listener on new titlw
  document.querySelector('#all-drinks-title').addEventListener('click', (e) => {
    e.preventDefault();

    //collaspe menu
    document.querySelector('#drinks').classList.remove('collapsed');
    //show content
    document.querySelector('.all-drinks').classList.add('collapsed');
  });
});

document.querySelector('#dessert').addEventListener('click', (e) => {
  e.preventDefault();

  //collaspe menu
  document.querySelector('#dessert').classList.add('collapsed');
  //show content
  document.querySelector('.all-dessert').classList.remove('collapsed');

  //add listener on new titlw
  document.querySelector('#all-dessert-title').addEventListener('click', (e) => {
    e.preventDefault();

    //collaspe menu
    document.querySelector('#dessert').classList.remove('collapsed');
    //show content
    document.querySelector('.all-dessert').classList.add('collapsed');
  });
});
