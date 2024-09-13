/******************************** CONSTANTS *********************************/ 
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/ 
  // Find the recipe for the pieType specified
  const recipeFinder = (type)=>{
    for(let recipe in recipes){
      if(recipe === type){
        return type
      }
    }
  }
  // Bake the number of pies specified by the pieQuantity
  const baker = (recipe,pieQuantity)=>{
    
    for (let i = 0; i < pieQuantity; i++) {
      let combiningMsg = `Combining ingredients for ${recipes[recipe]}: `
      combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
      console.log(combiningMsg);
  }
  console.log(pieQuantity)
}

    // Print the nth pie that was baked
  // Print the cost of each pie based on the cost of each ingredient
  const price = (recipe) =>{
    const costOfPie = recipe.reduce((prev, current) => {
      return prev + current.cost;
    }, recipe[0].cost);
    console.log(`Cost per pie: ${costOfPie}`);
    return costOfPie
  }
  // Calculate the total cost of all the pies
  const revenue = (totalCost,profitMargin,pieQuantity)=>{
    const earn = totalCost * (profitMargin || 1.2);
  console.log(`Sold ${pieQuantity} pies for $${earn.toFixed(2)}!`)
  }
  // Print the total revenue calculated using the given profitMargin


function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  // Find the recipe for the pieType specified
  let recipe = recipes[pieType]

  // Bake the number of pies specified by the pieQuantity
  baker(recipe, pieQuantity)

  // Print the cost of each pie based on the cost of each ingredient
  let num = price(recipe, pieQuantity)

  
  // Calculate the total cost of all the pies
  const totalCost = num * pieQuantity;

  // Print the total revenue calculated using the given profitMargin
  revenue(totalCost,profitMargin,pieQuantity);
}
console.log(bakeAndSellPies("applePie", 5, 2.5));
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);
/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
// module.exports = {
//   bakeAndSellPies
// };
