const { query }  = require("./script");
const { recipes }= require("../recipedata");

console.log(recipes)
console.log(recipes[0].title)

//create async function name 
//insert dummy data into sql table
//await query
// inside the async - create for each 

async function insertData() {

 recipes.forEach(async (recipe) => { 
  
 const response = await query((`INSERT INTO recipes (title, ingredients, instructions, image) VALUES ($1, $2, $3, $4)`), [recipe.title, recipe.ingredients, recipe.instructions, recipe.image]);
 console.table(response.rows)
 });
 console.log("Inserted Data!") 
}

modulu.exports = { insertData() }