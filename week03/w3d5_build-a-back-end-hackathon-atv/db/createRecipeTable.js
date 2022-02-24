const { query } = require("./script");

//create async function name
//create sql table with columns for recipes
//await query

async function createRecipeTable() {
  const SQLquery =
    "CREATE TABLE recipes (id SERIAL PRIMARY KEY, title TEXT, ingredients VARCHAR ARRAY, instructions VARCHAR, image VARCHAR);";
  const table = await query(SQLquery);
  console.table(table.rows);
  console.log(table, "Table has been created!");
}
createRecipeTable();
