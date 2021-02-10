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

// ------------------------------------------------------------------------------------------------
// opdracht 1
function countInventoryToSell(televisions) {
  let totalCount = 0;
  for (const television of televisions) {
    const toSell = television.originalStock - television.sold;
    totalCount = totalCount + toSell
  }
  return totalCount
}

const totalCount = countInventoryToSell(inventory)
const notSold = document.getElementById('notSold')
  notSold.textContent = totalCount;


// ------------------------------------------------------------------------------------------------
// Opdracht 2 - gemaakt, maar omdat ik de bonus opdrachten nog niet heb gedaan uitgecomment
// const televisionType = inventory.map((television)=> {
//   return television.brand + " " + television.name
// })
//
// const televisionsSold = inventory.filter((television) => {
//     if (television.sold === television.originalStock) {
//       return inventory
//     }
// })
//
// const optionLight = inventory.filter((television) => {
//   if (television.options.ambiLight === true ) {
//     return inventory
//   }
// })
//
// const lowToHighPrice = inventory.sort((priceA, priceB) => {
//   return priceA.price - priceB.price
// })


// ------------------------------------------------------------------------------------------------
// OPDRACHT 3

function targetRevenue(products) {
  let totalRevenue = 0;
  for (const product of products) {
    const targetEarnings = product.originalStock * product.price;
    totalRevenue = totalRevenue + targetEarnings;
  }
  return totalRevenue;
}

const totalRevenue = targetRevenue(inventory);
const revenueProducts = document.getElementById('revenue');
revenueProducts.textContent = totalRevenue;

function totalEarned(products) {
  let earnings = 0;
  for (const product of products) {

    const soldProducts = product.sold * product.price;
    earnings = earnings + soldProducts;
  }
  return earnings;
}

const totalEarnings = totalEarned(inventory);
const earningsProductsSold = document.getElementById('earnings');
earningsProductsSold.textContent = totalEarnings

// ------------------------------------------------------------------------------------------------
// OPDRACHT 4 -- meegenomen in opdracht 5

// ------------------------------------------------------------------------------------------------
// OPDRACHT 5


function displayProducts(television) {
  const tvType = `${television.brand} ${television.type} - ${television.name}`
  return tvType
}


function displayPrice(price) {
  const tvPrice = `€${price},- `;
  return tvPrice
}

function displaySize(size) {
  let sizeArray = "";

  for (let i = 0; i < size.length; i++) {
    sizeArray = sizeArray + `${size[i]} inch (${Math.floor(size[i] * 2.54)} cm) | `

  }
  return sizeArray
}


// functie die alle TV's weergeeft
function displayTvInfo(inventory) {
  let tvArray = "";

  for (let i = 0; i < inventory.length; i++) {
    let product = inventory[i];

    tvArray = displayProducts(inventory[i]) + `\n` + displayPrice(inventory[i].price) + `\n` + displaySize(inventory[i].availableSizes)
    console.log(tvArray)

    const televisionList = document.getElementById('productList');
    const displayAll = document.createElement('p');
    displayAll.setAttribute('id', 'product-item');
    displayAll.setAttribute('style', 'white-space: pre;')

    displayAll.textContent = displayProducts(inventory[i]) + `\n` + displayPrice(inventory[i].price) + `\n` + displaySize(inventory[i].availableSizes);
    televisionList.appendChild(displayAll);
  }
  return tvArray
}

displayTvInfo(inventory)