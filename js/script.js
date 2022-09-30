"use strict";

// let shoppingList = [
//   { name: "bread", number: 2, buy: false },
//   { name: "milk", number: 3, buy: true },
//   { name: "water", number: 1, buy: false },
//   { name: "aplle", number: 4, buy: true },
//   { name: "meat", number: 1, buy: false },
// ];

// console.log("task #1.1");
// shoppingList.sort(function (a, b) {
//   return a.buy - b.buy;
// });
// console.log(shoppingList);

// console.log("task #2.1");
// let purchase = { name: "bread", number: 2, buy: true };
// shoppingList.forEach((item) => {
//   if (item.name === purchase.name) {
//     ++item.number;
//   } else {
//     if (item.name === purchase.name) {
//       shoppingList.push(purchase);
//     }
//   }
// });
// console.log(shoppingList);

// console.log("task #1.3");
// let purchaseName = "bread";
// shoppingList.forEach((item) => {
//   if (purchaseName === item.name) {
//     item.buy = true;
//   }
// });
// console.log(shoppingList);

// let shopReceipt = [
//   { name: "bread", number: 2, price: 20 },
//   { name: "milk", number: 3, price: 10 },
//   { name: "water", number: 1, price: 2 },
//   { name: "aplle", number: 4, price: 10 },
//   { name: "meat", number: 7, price: 5 },
// ];
// console.log("task #2.1");
// shopReceipt.forEach((item) => {
//   console.log(
//     `name:${item.name} - number:${item.number} - price:${item.price}`
//   );
// });

// console.log("task #2.2");
// let resultShopReceipt = shopReceipt.reduce((sum, item) => sum + item.price, 0);
// console.log(resultShopReceipt);

// console.log("task #2.3");
// let resultSort = shopReceipt.sort(function (a, b) {
//   return b.price - a.price;
// });
// console.log(resultSort[0]);

// console.log("task #2.4");
// console.log((resultShopReceipt / shopReceipt.length).toFixed(1));

// let styleCSS = [
//   { name: "color", value: "red" },
//   { name: "font-size", value: "152px" },
//   { name: "text-align", value: "center" },
//   { name: "letter-spacing", value: "5px" },
//   { name: "text-decoration", value: "none" },
//   { name: "line-height", value: "32px" },
// ];
// console.log("task #3");
// let style;
// let result = "";
// styleCSS.forEach((item) => {
//   style = item.name + ":" + item.value;
//   result += style + ";";
//   console.log(style);
// });
// console.log(result);
// document.write(`<p style=${result}> Hello</p>`);

// let auditoriumsAcademy = [
//   { name: "hsfd", numberSeats: 20, faculty: "ABC" },
//   { name: "qegf", numberSeats: 15, faculty: "ANP" },
//   { name: "apgj", numberSeats: 11, faculty: "BDT" },
//   { name: "port", numberSeats: 16, faculty: "GHV" },
//   { name: "nifo", numberSeats: 10, faculty: "PTY" },
// ];

// console.log("task #4.1");
// auditoriumsAcademy.forEach((item) => {
//   console.log(`${item.name}`);
// });

// console.log("task #4.2");
// auditoriumsAcademy.forEach((item) => {
//   console.log(`${item.name} - ${item.faculty}`);
// });

// console.log("task #4.3");
// let groupStudent = { name: "group_1", numberStudent: 15, faculty: "ABC" };
// auditoriumsAcademy.forEach((item, array) => {
//   if (groupStudent.numberStudent <= item.numberSeats) {
//     console.log(`${item.name} ${item.numberSeats} ${item.faculty}`);
//   }
// });

// console.log("task #4.4");
// let resultSortAuditoriums = auditoriumsAcademy.sort(function (a, b) {
//   return a.numberSeats - b.numberSeats;
// });
// console.log(resultSortAuditoriums);

// console.log(auditoriumsAcademy.sort((a, b) => a.numberSeats - b.numberSeats));

// console.log("task #4.5");
// console.log(auditoriumsAcademy.sort((a, b) => a.name.localeCompare(b.name)));
