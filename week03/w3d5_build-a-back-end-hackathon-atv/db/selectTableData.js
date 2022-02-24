const { query }  = require("./script");


async function selectTableData() {
    const SQLquery = "SELECT * FROM recipes" 
    const table = await query(SQLquery)
    console.table(table.rows)
    console.log("Data has been selected!")
};

selectTableData()