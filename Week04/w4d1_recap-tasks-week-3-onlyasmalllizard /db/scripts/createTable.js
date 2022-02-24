/* 
Plan
Require query from database
declare an async function
within this function, pass a SQL statement creating a table into query and await the response
Console.log when the create table is complete

call the function
*/

const { query } = require('../index');

async function createCatsTable() {
  const response = await query(
    'CREATE TABLE IF NOT EXISTS cats (id SERIAL PRIMARY KEY, name TEXT, human TEXT, hobby TEXT);'
  );
  console.log('Cats table created.');
}

createCatsTable();
