"use strict";

let shoppingList = [
  { name: "bread", number: 2, buy: false },
  { name: "milk", number: 3, buy: true },
  { name: "water", number: 1, buy: false },
  { name: "aplle", number: 4, buy: true },
  { name: "meat", number: 1, buy: false },
];

function sortShopingList(array) {
  array.sort(function (a, b) {
    return a.buy - b.buy;
  });
  console.log("task #1.1");
  console.log(shoppingList);
}
// sortShopingList(shoppingList);

function addPurchase(purchase, array) {
  let x = 0;
  array.forEach((item) => {
    if (item.name === purchase.name) {
      x = 1;
      item.number += purchase.number;
    }
  });
  if (x === 0) {
    array.push(purchase);
  }
  console.log("task #2.1");
  console.log(array);
}
addPurchase({ name: "fish", number: 2, buy: true }, shoppingList);

function buyPurchase(purchaseName, array) {
  array.forEach((item) => {
    if (purchaseName === item.name) {
      item.buy = true;
    }
  });
  console.log("task #1.3");
  console.log(array);
}
buyPurchase("bread", shoppingList);

let shopReceipt = [
  { name: "bread", number: 2, price: 20 },
  { name: "milk", number: 3, price: 10 },
  { name: "water", number: 1, price: 2 },
  { name: "aplle", number: 4, price: 10 },
  { name: "meat", number: 7, price: 5 },
];

function printShopReceipt(array) {
  console.log("task #2.1");
  array.forEach((item) => {
    console.log(
      `name:${item.name} - number:${item.number} - price:${item.price}`
    );
  });
}
printShopReceipt(shopReceipt);

function calcTotalAmount(array) {
  let resultShopReceipt = array.reduce((sum, item) => sum + item.price, 0);
  console.log("task #2.2");
  console.log(`Total amount payable: ${resultShopReceipt}`);
  return resultShopReceipt;
}
calcTotalAmount(shopReceipt);

function mostExpensivePurchaseInCheck(array) {
  let resultSort = array.sort(function (a, b) {
    return b.price - a.price;
  });
  console.log("task #2.3");
  console.log(`name: ${resultSort[0].name} - price: ${resultSort[0].price}`);
}
mostExpensivePurchaseInCheck(shopReceipt);

function calcAverageCost(array) {
  console.log("task #2.4");
  console.log((calcTotalAmount(array) / array.length).toFixed(1));
}
calcAverageCost(shopReceipt);

let styleCSS = [
  { name: "color", value: "red" },
  { name: "font-size", value: "152px" },
  { name: "text-align", value: "center" },
  { name: "letter-spacing", value: "5px" },
  { name: "text-decoration", value: "none" },
  { name: "line-height", value: "32px" },
];

function appStylesCSS(array) {
  console.log("task #3");
  let style;
  let result = "";
  array.forEach((item) => {
    style = item.name + ":" + item.value;
    result += style + ";";
  });
  document.write(`<p style=${result}> Hello</p>`);
}
appStylesCSS(styleCSS);

let auditoriumsAcademy = [
  { name: "hsfd", numberSeats: 20, faculty: "ABC" },
  { name: "qegf", numberSeats: 15, faculty: "ANP" },
  { name: "apgj", numberSeats: 11, faculty: "BDT" },
  { name: "port", numberSeats: 16, faculty: "GHV" },
  { name: "nifo", numberSeats: 10, faculty: "PTY" },
];

function showAllAuditoriums(array) {
  console.log("task #4.1");
  array.forEach((item) => {
    console.log(`${item.name}`);
  });
}
showAllAuditoriums(auditoriumsAcademy);

function showAuditoriumsForFaculty(array, faculty) {
  console.log("task #4.2");
  let x = 0;
  array.forEach((item) => {
    if (item.faculty === faculty) {
      x = 1;
      console.log(`auditorium ${item.name} for the faculty ${item.faculty}`);
    }
  });
  if (x === 0) {
    console.log(`there are no classrooms for the faculty ${faculty}`);
  }
}
showAuditoriumsForFaculty(auditoriumsAcademy, 'abc');
showAuditoriumsForFaculty(auditoriumsAcademy, "ANP");

function showAuditoriumsForGroup(array, obj) {
  console.log("task #4.3");
  let x = 0;
  array.forEach((item) => {
    if (obj.numberStudent <= item.numberSeats && obj.faculty === item.faculty) {
      x = 1
      console.log(`For a group of ${obj.numberStudent} students of Faculty ${obj.faculty}, the auditorium is suitable ${item.name}`);
    }
  });
  if (x === 0) {
    array.forEach((item) => {
      if (obj.numberStudent <= item.numberSeats) {
        console.log(`For a group of ${obj.numberStudent} students of Faculty ${obj.faculty}, the auditorium is suitable ${item.name}`);
      }
    });
  }
}
showAuditoriumsForGroup(auditoriumsAcademy, { name: "group_1", numberStudent: 15, faculty: "ABC" });
showAuditoriumsForGroup(auditoriumsAcademy, { name: "group_2", numberStudent: 12, faculty: "BDT" });
showAuditoriumsForGroup(auditoriumsAcademy, { name: "group_3", numberStudent: 18, faculty: "GHV" });

function SortAuditoriumsNumberSeats(array) {
  console.log("task #4.4");
  let resultSortAuditoriums = array.sort(function (a, b) {
    return a.numberSeats - b.numberSeats;
  });
  console.log(resultSortAuditoriums);
}
SortAuditoriumsNumberSeats(auditoriumsAcademy);

function SortAuditoriumsName(array) {
  console.log("task #4.5");
  console.log(array.sort((a, b) => a.name.localeCompare(b.name)));
}
SortAuditoriumsName(auditoriumsAcademy);
