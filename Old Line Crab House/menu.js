'use strict';

/*This is majorly refractored code. My original way worked, but included a nasty bug (couldn't solve) and created infinite (literally) console warnings. This is an attempt to fix those issues, but may be a bit uglier?*/

const seafoodEl = document.querySelector('#seafood');

const seafood = `<div class="all-seafood"><h1 id="all-seafood-title" class="menu-title">Seafood</h1><div class="menu-img"><img src="./img/seafood.png" alt="" /></div><div class="menu-item"><h2>1 Dozen 6.6 - 8.5oz Maryland Steamed Blue Crabs</h2><h3>A dozen perfectly steamed fresh large Maryland Blue Crabs</h3><h4>$95.00</h4></div><div class="menu-item"><h2>1 Lb Steamed Scallops</h2><h3>Served alongside butter and Old Bay</h3><h4>$18.00</h4></div><div class="menu-item"><h2>1/2 Dozen Large Chesapeake Oysters</h2><h3>6 beautiful large oysters direct from the Chesapeake. Raw or Steamed</h3><h4>$15.00</h4></div><div class="menu-item"><h2>Maryland Crab Soup</h2><h3>A hearty bowl of lump crab, tomatoes, stock, & veggies</h3><h4>$10.00</h4></div><div class="menu-item"><h2>Table Sampler</h2><h3>   We recommend you bring friends! This meal includes 8 steamed blue crabs, 1 lb clams, 1 lb mussels, & 10 oysters.</h3><h4>$85.00</h4></div></div>`;

const landfoodEl = document.querySelector('#landfood');

const landfood = `<div class="all-landfood"><h1 id="all-landfood-title"class="menu-title">Meat</h1><div  class="menu-img"><img src="./img/landfood.png" alt=""/></div><div class="menu-item"><h2>Baltimore Pit Sandwich</h2><h3>A hidden gem, this sandich consists of thinly sliced charcoal-roasted beef or turkey with onions & tiger or BBQ sauce.</h3><h4>$10.00</h4></div><div class="menu-item"><h2>New Jersey THEC w/SPK</h2><h3>A Garden State special: Taylor Ham, egg, cheese with salt, pepper, & ketchup. Available on a toasted Everything Bagel (classic) or a roll.</h3><h4>$7.50</h4></div><div class="menu-item"><h2>Philly Roast Pork Sandwich</h2><h3>Tender roasted pork on a seeded roll, with hot provolone cheese and garlic broccoli rabe.</h3><h4>$8.00</h4></div><div class="menu-item"><h2>1/2 Lb Potato Salad</h2>  <h3>Classic German Potato Salad.</h3><h4>$6.00</h4></div><div class="menu-item"><h2>1/2 Lb Mac 'n' Cheese</h2><h3>Classic American Macaroni & Cheese.</h3><h4>$6.00</h4></div></div>`;

const veggieEl = document.querySelector('#veggie');

const veggie = `<div class="all-veggie"><h1 id="all-veggie-title" class="menu-title">Veggie</h1><div class="menu-img"><img src="./img/veggie.png" alt="" /></div><div class="menu-item"><h2>Maryland Steamed Blue Crabs</h2><h3>A dozen perfectly steamed fresh Maryland Blue Crabs</h3><h4>$18.00</h4></div><div class="menu-item"><h2>Maryland Steamed Blue Crabs</h2><h3>A dozen perfectly steamed fresh Maryland Blue Crabs</h3><h4>$18.00</h4></div>
<div class="menu-item"><h2>Maryland Steamed Blue Crabs</h2><h3>A dozen perfectly steamed fresh Maryland Blue Crabs</h3><h4>$18.00</h4></div><div class="menu-item"><h2>Maryland Steamed Blue Crabs</h2><h3>A dozen perfectly steamed fresh Maryland Blue Crabs</h3><h4>$18.00</h4></div><div class="menu-item"><h2>Maryland Steamed Blue Crabs</h2><h3>A dozen perfectly steamed fresh Maryland Blue Crabs</h3><h4>$18.00</h4></div></div>`;

const drinksEl = document.querySelector('#drinks');

const drinks = `<div class="all-drinks"><h1 id="all-drinks-title" class="menu-title">Drinks</h1><div class="menu-img"><img src="./img/drinks.png" alt="" /></div><div class="menu-item"><h2>Maryland Steamed Blue Crabs</h2><h3>A dozen perfectly steamed fresh Maryland Blue Crabs</h3><h4>$18.00</h4></div><div class="menu-item"><h2>Maryland Steamed Blue Crabs</h2><h3>A dozen perfectly steamed fresh Maryland Blue Crabs</h3><h4>$18.00</h4></div><div class="menu-item"><h2>Maryland Steamed Blue Crabs</h2><h3>A dozen perfectly steamed fresh Maryland Blue Crabs</h3><h4>$18.00</h4></div><div class="menu-item"><h2>Maryland Steamed Blue Crabs</h2><h3>A dozen perfectly steamed fresh Maryland Blue Crabs</h3><h4>$18.00</h4></div><div class="menu-item"><h2>Maryland Steamed Blue Crabs</h2><h3>A dozen perfectly steamed fresh Maryland Blue Crabs</h3><h4>$18.00</h4></div></div>`;

