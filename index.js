const coffeeData = require ("./coffee_data");
const printName = (item) => {
  return item.name
}
console.log(coffeeData.map(printName))

const fiveAndUnder = (item) => {
  return item.price <= 5;
}
const drinksFiveAndUnder = (coffeeData.filter(fiveAndUnder));
console.log(drinksFiveAndUnder)

const evenNumber = (item) => {
  return item.price % 2 === 0
}
const evenDrinks = (coffeeData.filter(evenNumber));
console.log(evenDrinks)