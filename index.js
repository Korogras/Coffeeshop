//require coffee_data.js
const coffeeData = require ("./coffee_data");
//print array of all coffee items on menu
const printName = (item) => {
  return item.name
}
console.log(coffeeData.map(printName))
//print array of all drinks that a re $5 and under
const fiveAndUnder = (item) => {
  return item.price <= 5;
}
const drinksFiveAndUnder = (coffeeData.filter(fiveAndUnder));
console.log(drinksFiveAndUnder)
//print all drinks with even number prices
const evenNumber = (item) => {
  return item.price % 2 === 0
}
const evenDrinks = (coffeeData.filter(evenNumber));
console.log(evenDrinks);
//print cost of total price of menu
const allPrices = (item) => {
  return item.price
}
const priceArray = coffeeData.map(allPrices);
console.log(priceArray);

const sumTotalCost = (accumulator, currentValue) => {
  return accumulator + currentValue;
}
const totalPrice = priceArray.reduce(sumTotalCost);
console.log(totalPrice)
//print all seasonal drinks
const seasonalDrinks = (item) => {
  return item.seasonal === true
}
const seasonalDrinksList = (coffeeData.filter(seasonalDrinks))
console.log(seasonalDrinksList)

// print all seasonal drinks with "with imported beans" after item name
const seasonalDrinksPrint = (item) => {
console.log(item.name + " with imported beans") 
}
seasonalDrinksList.map(seasonalDrinksPrint)
