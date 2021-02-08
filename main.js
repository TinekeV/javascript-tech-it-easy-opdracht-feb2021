// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//strategie voor opdracht 1:
// iets anders? for loop?
// loopen over alle televisies
// tellen (variabele count aanmaken)
// nog te verkopen: originalStock - sold
// optellen bij het totaal

// stappenplan:
// [x] functie maken
// [x] aanroepen
// [x] parameter toevoegen (inventory)
// [x] inventory ingeven als argument
// [x] count variabele (buiten de loop)
// [x] loop maken (voor elke televisie)
// [x] originalStock - sold optellen bij count
// [x] totaal return uit de functie

// opdracht 1A
function countInventoryToSell(televisions) {
  //console.log('SALES!', televisions);
  let totalCount = 0;
  for (const television of televisions) {
    //console.log("television in loop", television.originalStock, television.sold)
    const toSell = television.originalStock - television.sold;
    totalCount = totalCount + toSell
  }
  //console.log('TOTAL COUNT', totalCount)
  return totalCount
}

const totalCount = countInventoryToSell(inventory)
//console.log('OUTSIDE?', totalCount)

// opdracht 1B
// weergeven op de pagina
// - [x] Rekenwerk
// - [x] HTML element maken
// - [] Element selecteren waar de count moet worden weergegeven
// - [] textContent aanpassen met TotalCount
// - [] Rood maken (in CSS)

const notSold = document.getElementById('notSold')
//console.log(notSold)
  notSold.textContent = totalCount;


// ------------------------------------------------------------------------------------------------
// Opdracht 2A
const televisionType = inventory.map((television)=> {
  return television.brand + " " + television.name
})
//console.log(televisionType)

// Opdracht 2B
const televisionsSold = inventory.filter((television) => {
    if (television.sold === television.originalStock) {
      return inventory
    }
})
//console.log(televisionsSold)

// Opdracht 2C
const optionAmbiLight = inventory.filter((television) => {
  if (television.options.ambiLight === true ) {
    return inventory
  }
})
//console.log(optionAmbiLight)

// Opdracht 2D
const lowToHighPrice = inventory.sort((priceA, priceB) => {
  return priceA.price - priceB.price
})
//console.log(lowToHighPrice)


// ------------------------------------------------------------------------------------------------
// OPDRACHT 3A

// wat is onze doel opbrengst? bereken de totale opbrengst als alle exemplaren van iedere type verkocht zou worden
// originalstock x price voor elk televisie type
// loop met een counter maken

function targetRevenue(products) {
  //console.log('SALES!', products);
  let totalRevenue = 0;
  for (const product of products) {
    //console.log("television in loop", product.originalStock, product.price);
    const targetEarnings = product.originalStock * product.price;
    totalRevenue = totalRevenue + targetEarnings;
  }
  //console.log('TOTAL REVENUE: ', totalRevenue);
  return totalRevenue;
}

const totalRevenue = targetRevenue(inventory);
//console.log('OUTSIDE LOOP: ', totalRevenue);

const revenueProducts = document.getElementById('revenue');
//console.log(revenueProducts)
revenueProducts.textContent = totalRevenue;

// OPDRACHT 3B

function totalEarned(products) {
  //console.log('SALES!', products);
  let earnings = 0;
  for (const product of products) {
    //console.log("television in loop", product.sold, product.price);
    const soldProducts = product.sold * product.price;
    earnings = earnings + soldProducts;
  }
  //console.log('EARNED ON SOLD PRODUCTS: ', earnings);
  return earnings;
}

const totalEarnings = totalEarned(inventory);
//console.log('OUTSIDE LOOP: ', totalEarnings);

const earningsProductsSold = document.getElementById('earnings');
//console.log(earningsProductsSold)
earningsProductsSold.textContent = totalEarnings

// ------------------------------------------------------------------------------------------------
// OPDRACHT 4 -- meegenomen in opdracht 5 om het om te bouwen tot een functie

// const tvOne = document.createElement('li');
// tvOne.setAttribute('class', 'productList-item');
// const tvType = inventory[0].type;
// tvOne.textContent = tvType;
//
// const tvTwo = document.createElement('li');
// tvTwo.setAttribute('class', 'productList-item');
// const tvType2 = inventory[1].type;
// tvTwo.textContent = tvType2;
//
// const productList = document.getElementById('productList');
// productList.appendChild(tvOne);
// productList.appendChild(tvTwo);


// ------------------------------------------------------------------------------------------------
// OPDRACHT 5

// 5A:

function displayProducts(television) {
  const tvOne = document.createElement('li');
  tvOne.setAttribute('class', 'productList-item');
  const tvType = television.brand + " " + television.type + " - " + television.name;
  tvOne.textContent = tvType;

  const productList = document.getElementById('productList');
  productList.appendChild(tvOne);
}

for (let index = 0; index < inventory.length; index++) {
  const television = inventory[index];
  displayProducts(television);
}

// 5B:

function displayPrice(product) {

}
const priceList = document.getElementsByClassName('productList-item')
console.log(priceList)

for (let index = 0; index < inventory.length; index++) {
  const product = inventory[index];

  const price = document.createElement('p');
  price.setAttribute('class', 'product-price')
  priceList[index].appendChild(price)

  const tvPrice = '€' + product.price + ',-';
  price.textContent = tvPrice;

  displayPrice(product);
}


//     const priceList = document.getElementsByClassName('productList-item');
