"use strict";

let shoppingList = [
  { name: "bread", number: 2, buy: true },
  { name: "milk", number: 3, buy: true },
  { name: "water", number: 1, buy: false },
  { name: "aplle", number: 4, buy: true },
  { name: "meat", number: 1, buy: false },
];

  shoppingList.sort(function(a, b){return a.buy - b.buy});
// console.log(shoppingList);

// let shoppingList_2 =[
//   { name: 'bread', number: 2, buy: true },
//   { name: 'milk', number: 3, buy: false },
//   { name: 'sugar', number: 1, buy: false },
// ]


//   shoppingList_2.forEach((item) => {
//     if (item.name === shoppingList.item.name) {
//       alert('ehf');
//         }
   
//   });

// console.log(shoppingList);


{
  // let product = prompt("продукт");
  // shoppingList.forEach((item) => {
  //   if (product === item.name) {
  //     item.buy = true;
  //   }
  // });
  // console.log(shoppingList);
}

let shopReceipt = [
  { name: "bread", number: 2, price: 20 },
  { name: "milk", number: 3, price: 15  },
  { name: "water", number: 1, price: 2  },
  { name: "aplle", number: 4, price: 10  },
  { name: "meat", number: 7, price: 5  },
]

// shopReceipt.forEach((item) => {
//   console.log(`name:${item.name} - number:${item.number} - price:${item.price}`);
// });
// let result = shopReceipt.reduce((sum,item) =>
//   sum + item.price, 0);
// console.log(result);

