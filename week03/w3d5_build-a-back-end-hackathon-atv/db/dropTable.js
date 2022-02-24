const { query }  = require("./script");

async function dropTable() {
    const SQLquery = "DROP TABLE IF EXISTS recipes;"
    const table = await query(SQLquery)
    console.log("Table has been dropped!") 
}

dropTable()
