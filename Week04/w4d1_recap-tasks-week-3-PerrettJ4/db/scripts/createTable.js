const { query }  = require("../index");

//create async function name 
//create sql table with columns for recipes
//await query

async function createTable() {
    const SQLquery = "CREATE TABLE cats  (id SERIAL PRIMARY KEY, catId TEXT,  catName VARCHAR, human VARCHAR, hobby VARCHAR);"
    const table = await query(SQLquery)
    console.table(table.rows)
    console.log(table, "cat table has been created!") 
}

createTable()
