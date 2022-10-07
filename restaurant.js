const { mongerInventory } = require("./fishMonger.js")

chefInventory = mongerInventory(5.00)

const fishMenu = () => {
  let menuString = ""
  //console.log(`<h1>Menu</h1>`);
  menuString += `<h1>Menu</h1>\n`
  //console.log(`<article class ="menu">`)
  menuString += `<article class ="menu">\n`
  for (fish of chefInventory) {
    //console.log(` <h2>${fish.species}</h2>`);
    menuString += ` <h2>${fish.species}</h2>\n`
    //console.log(` <section class="menu__item">${fish.species} Soup</section>`)
    menuString += ` <section class="menu__item">${fish.species} Soup</section>\n`
    //console.log(` <section class="menu__item">${fish.species} Sandwich</section>`)
    menuString += ` <section class="menu__item">${fish.species} Sandwich</section>\n`
    //console.log(` <section class="menu__item">Grilled ${fish.species}</section>`)
    menuString += ` <section class="menu__item">Grilled ${fish.species}</section>\n`
  }
  //console.log('</article>');
  menuString += '</article>\n'
  return menuString;
}

module.exports = {fishMenu};