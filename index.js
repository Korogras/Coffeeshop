const coffeeData = require ("./coffee_data");
const printName = (item) => {
  return item.name
}
console.log(coffeeData.map(printName))
