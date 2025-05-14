"use strict";

// 1. Получить заголовок "Калькулятор верстки" через метод getElementsByTagName. (тэг h1, получить именно элемент, а не коллекцию)
const title = document.getElementsByTagName("h1");

//2. Получить кнопки "Рассчитать" и "Сброс" через метод getElementsByClassName. (класс handler_btn)
const buttons = document.getElementsByClassName("handler_btn");

//3. Получить кнопку "+" под выпадающим списком через метод querySelector. (класс screen-btn)
const plusButton = document.querySelector(".screen-btn");

//4. Получить все элементы с классом other-items в две разные переменные. В первую элементы у которых так же присутствует класс percent, во вторую элементы у которых так же присутствует класс number через метод querySelectorAll.
const percentItems = document.querySelectorAll(".other-items .percent");
const numberItems = document.querySelectorAll(".other-items .number");

//5. Получить input type=range через его родителя с классом rollback одним запросом через метод querySelector.
const rollbackInput = document.querySelector(".rollback input[type='range']");

//6. Получить span с классом range-value через его родителя с классом rollback одним запросом через метод querySelector.
const rollbackSpan = document.querySelector(".rollback .range-value");

//7. Получить все инпуты с классом total-input справа через метод getElementsByClassName. (класс total-input, получить именно элементы, а не коллекции)
const inputs = document.getElementsByClassName("total-input");

[...inputs].forEach(function (item) {
  console.log(item);
});

//8. Получить все блоки с классом screen в изменяемую переменную ( let ) через метод querySelectorAll (далее мы будем переопределять ее значение)
let screen = document.querySelectorAll(".screen");

console.log(title[0]);
console.log(buttons);
console.log(plusButton);
console.log(percentItems);
console.log(numberItems);
console.log(rollbackInput);
console.log(rollbackSpan);
console.log(screen);

// const appData = {
//   title: "",
//   screens: [],
//   screenPrice: 0,
//   adaptive: true,
//   rollback: 10,
//   allServicePrices: 0,
//   fullPrice: 0,
//   servicePercentPrice: 0,
//   services: {},
//   start: () => {
//     appData.asking();
//     appData.addPrices();
//     appData.getFullPrice();
//     appData.getServicePercentPrice();
//     appData.getTitle();
//     appData.logger();
//   },

//   isNumber: function (num) {
//     return !isNaN(parseFloat(num)) && isFinite(num);
//   },

//   asking: function () {
//     do {
//       appData.title = prompt(
//         "Как называется ваш проект?",
//         "Калькулятор верстки"
//       );
//     } while (appData.isNumber(appData.title));

//     for (let i = 0; i < 2; i++) {
//       let price = 0;
//       let name = "";
//       do {
//         name = prompt("Какие типы экранов нужно разработать?");
//       } while (appData.isNumber(name));

//       do {
//         price = +prompt("Сколько будет стоить данная работа?");
//       } while (!appData.isNumber(price));

//       appData.screens.push({ id: i, name: name, price: price });
//     }

//     for (let i = 0; i < 2; i++) {
//       let name = "";
//       let price = 0;

//       do {
//         name = prompt("Какой дополнительный тип услуги нужен?");
//       } while (appData.isNumber(name));

//       do {
//         price = prompt("Сколько это будет стоить?");
//       } while (!appData.isNumber(price));

//       // appData.services[name] = +price;

//       //Создадим уникальный ключ для услуги
//       let uniqueKey = name;
//       let count = 1;

//       //Проверяем, существует ли уже такая услуга
//       while (appData.services[uniqueKey]) {
//         count++;
//         uniqueKey = `${name}_${count}`; // добавляем номер к имени
//       }

//       appData.services[uniqueKey] = +price; // сохраняем услугу с уникальным ключом
//     }

//     appData.adaptive = confirm("Нужен ли адаптив на сайте?");
//   },

//   addPrices: function () {
//     for (let screen of appData.screens) {
//       // appData.screenPrice += +screen.price;
//       appData.screenPrice = appData.screens.reduce(
//         (acc, screen) => acc + screen.price,
//         0
//       );
//     }

//     for (let key in appData.services) {
//       appData.allServicePrices += appData.services[key];
//     }
//   },

//   getFullPrice: function () {
//     appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
//   },

//   getServicePercentPrice: function () {
//     appData.servicePercentPrice =
//       appData.fullPrice - (appData.fullPrice * appData.rollback) / 100;
//   },

//   getTitle: function () {
//     appData.title =
//       appData.title.trim()[0].toUpperCase() +
//       appData.title.trim().slice(1).toLowerCase();
//   },

//   getRollbackMessage: (price) => {
//     if (price >= 30000) {
//       return "Даем скидку в 10%";
//     } else if (price >= 15000 && price < 30000) {
//       return "Даем скидку в 5%";
//     } else if (price >= 0 && price < 15000) {
//       return "Скидка не предусмотрена";
//     } else {
//       return "Что то пошло не так";
//     }
//   },

//   logger: () => {
//     console.log(appData.fullPrice);
//     console.log(appData.servicePercentPrice);
//     console.log(appData.screens);
//   },
// };

// appData.start();
