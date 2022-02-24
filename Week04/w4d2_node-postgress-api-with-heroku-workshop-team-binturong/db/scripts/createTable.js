/* 
Decontruct query from db/index
Write an async function called createTable
Write a SQL statement to construct the table with columns for id, name, type (array), HP, Attack, Defense, Sp Defense, Sp Attack, Speed, RETURNING *

Pass the statement into a query and await the response
console.log the response
console.log that the table was created

call the function

*/

const { query } = require('../index');

async function createTable() {
  const sqlQuery =
    'CREATE TABLE IF NOT EXISTS pokemon (id SERIAL PRIMARY KEY, name TEXT, type TEXT ARRAY, hp INTEGER, attack INTEGER, defense INTEGER, sp_defense INTEGER, sp_attack INTEGER, speed INTEGER);';

  const { rows } = await query(sqlQuery);
  console.log('Pokemon table created');
}

createTable();
