const { boatInventory } = require("./fishingBoat.js")

const getInventory = boatInventory();

const mongerInventory = (budgetPrice) => {
  let mongerArray = [];
  for (fish of getInventory) {
    if ((fish.price <= 7.50) && (fish.price <= budgetPrice)) {
      fish.amount = 10;
      mongerArray.push(fish)
    }
  }
  return mongerArray;
}

module.exports = {mongerInventory};