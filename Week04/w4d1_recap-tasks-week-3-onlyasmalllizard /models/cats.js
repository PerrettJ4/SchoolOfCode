const { query } = require('../db/index');

async function getAllCats() {
  const response = await query('SELECT * FROM cats;');
  return response.rows;
}

/* 
Declare an async function
Takes in an object called cat
Write a SQL string inserting cat to the table and returning cat
pass the string and params from the object into the query function
Await the response and save it in a variable
Console.log that cat was added
return response
*/

async function addCat(cat) {
  const { name, human, hobby } = cat;
  const queryString =
    'INSERT INTO cats (name, human, hobby) VALUES ($1, $2, $3) RETURNING *;';

  const response = await query(queryString, [name, human, hobby]);
  console.log(`${name} added to database`);
  return response;
}


/*
async function updateCat with 1 argument
sqlQUERY
await query("")
return res
*/

async function updateCat(cat){
  const {id, name, human, hobby} = cat;
  console.log({id, name, human, hobby})
  const SQLcommand = 'UPDATE cats SET name=$1, human=$2, hobby=$3 WHERE id=$4 RETURNING *;';

  const response = await query(SQLcommand, [name, human, hobby, id]);
  console.log(`${name} added to database in position ${id}`);
  return response;
}

module.exports = { getAllCats, addCat, updateCat };