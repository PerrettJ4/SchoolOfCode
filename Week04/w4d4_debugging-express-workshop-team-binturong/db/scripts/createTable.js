// import query
const { query } = require('../index');
// run query to make table
const sqlStatement = `CREATE TABLE jokes (id SERIAL PRIMARY KEY,text TEXT)`;

async function createTable() {
  const result = await query(sqlStatement);
  console.log(result);
}

createTable();
