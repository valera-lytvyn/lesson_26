"use strict";

let shoppingList = [
  { name: "bread", number: 2, buy: false },
  { name: "milk", number: 3, buy: true },
  { name: "water", number: 1, buy: false },
  { name: "aplle", number: 4, buy: true },
  { name: "meat", number: 1, buy: false },
];

function sortShopingList() {
  shoppingList.sort(function (a, b) {
    return a.buy - b.buy;
  });
  console.log("task #1.1");
  console.log(shoppingList);
}
// sortShopingList();

function addPurchase() {
  // let purchase = { name: "bread", number: 2, buy: true };
  let purchase = { name: "fish", number: 2, buy: true };
  let x = 0;
  shoppingList.forEach((item) => {
    if (item.name === purchase.name) {
      x = 1;
      item.number += purchase.number;
    }
  });
  if (x === 0) {
    shoppingList.push(purchase);
  }
  console.log("task #2.1");
  console.log(shoppingList);
}
// addPurchase();

function buyPurchase() {
  let purchaseName = "bread";
  shoppingList.forEach((item) => {
    if (purchaseName === item.name) {
      item.buy = true;
    }
  });
  console.log("task #1.3");
  console.log(shoppingList);
}
// buyPurchase();

let shopReceipt = [
  { name: "bread", number: 2, price: 20 },
  { name: "milk", number: 3, price: 10 },
  { name: "water", number: 1, price: 2 },
  { name: "aplle", number: 4, price: 10 },
  { name: "meat", number: 7, price: 5 },
];

function printShopReceipt() {
  console.log("task #2.1");
  shopReceipt.forEach((item) => {
    console.log(
      `name:${item.name} - number:${item.number} - price:${item.price}`
    );
  });
}
// printShopReceipt();

function calcTotalAmount() {
  let resultShopReceipt = shopReceipt.reduce((sum, item) => sum + item.price, 0);
  console.log("task #2.2");
  console.log(`Total amount payable: ${resultShopReceipt}`);
  return resultShopReceipt;
}
// calcTotalAmount();

function mostExpensivePurchaseInCheck() {
  let resultSort = shopReceipt.sort(function (a, b) {
    return b.price - a.price;
  });
  console.log("task #2.3");
  console.log(`name: ${resultSort[0].name} - price: ${resultSort[0].price}`);
}
// mostExpensivePurchaseInCheck();

function calcAverageCost() {
  console.log("task #2.4");
  console.log((calcTotalAmount() / shopReceipt.length).toFixed(1));
}
// calcAverageCost();

let styleCSS = [
  { name: "color", value: "red" },
  { name: "font-size", value: "152px" },
  { name: "text-align", value: "center" },
  { name: "letter-spacing", value: "5px" },
  { name: "text-decoration", value: "none" },
  { name: "line-height", value: "32px" },
];

function appStylesCSS() {
  console.log("task #3");
  let style;
  let result = "";
  styleCSS.forEach((item) => {
    style = item.name + ":" + item.value;
    result += style + ";";
      });
   document.write(`<p style=${result}> Hello</p>`);
}
// appStylesCSS();

let auditoriumsAcademy = [
  { name: "hsfd", numberSeats: 20, faculty: "ABC" },
  { name: "qegf", numberSeats: 15, faculty: "ANP" },
  { name: "apgj", numberSeats: 11, faculty: "BDT" },
  { name: "port", numberSeats: 16, faculty: "GHV" },
  { name: "nifo", numberSeats: 10, faculty: "PTY" },
];

function showAllAuditoriums(){
  console.log("task #4.1");
  auditoriumsAcademy.forEach((item) => {
    console.log(`${item.name}`);
  });
}
// showAllAuditoriums();

function showAuditoriumsForFaculty() {
  console.log("task #4.2");
  auditoriumsAcademy.forEach((item) => {
    console.log(`${item.name} - ${item.faculty}`);
  });
}
// showAuditoriumsForFaculty();

function showAuditoriumsForGroup() {
  console.log("task #4.3");
  let groupStudent = { name: "group_1", numberStudent: 15, faculty: "ABC" };
  auditoriumsAcademy.forEach((item, array) => {
    if (groupStudent.numberStudent <= item.numberSeats) {
      console.log(`${item.name} ${item.numberSeats} ${item.faculty}`);
    }
  });
}
// showAuditoriumsForGroup();

function SortAuditoriumsNumberSeats() {
  console.log("task #4.4");
  let resultSortAuditoriums = auditoriumsAcademy.sort(function (a, b) {
    return a.numberSeats - b.numberSeats;
  });
  console.log(resultSortAuditoriums);
  // console.log(auditoriumsAcademy.sort((a, b) => a.numberSeats - b.numberSeats));
}
// SortAuditoriumsNumberSeats();

function SortAuditoriumsName() {
  console.log("task #4.5");
  console.log(auditoriumsAcademy.sort((a, b) => a.name.localeCompare(b.name)));
}
// SortAuditoriumsName();