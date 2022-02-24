/* Import query
Declare an async function
Inside the function, call query, passing in SELECT * FROM pokemon
await the response and destructure it into rows
return rows

export all functions
*/
const { query } = require("../db/index");

async function getAllPokemon() {
  const { rows } = await query("SELECT * FROM pokemon;");
  return rows;
}

async function getPokemonById(id) {
  const { rows } = await query("SELECT * FROM pokemon WHERE id = $1;", [id]);
  if (rows.length === 0) {
    throw new ReferenceError("requested data does not exist");
  }
  return rows;
}

/*
async function
taking in a string
write a sql query that compares the name to the name of all the pokemon in the database and returns any that include the name

call query with the sql string and the parameter of name
await the response and destructure it into rows
return the rows
*/

async function getPokemonByName(name) {
  const sqlQuery = "SELECT * FROM pokemon WHERE name LIKE $1";
  const searchName = `%${
    name[0].toUpperCase() + name.substring(1).toLowerCase()
  }%`;

  const { rows } = await query(sqlQuery, [searchName]);
  return rows;
}

/* 
asycn fucntion with argument type
selct query where $1 is like any (type)
create xonst for a modulus search with first letter capped
return destructtured rows, awaiting the query
*/

async function getPokemonByType(type) {
  const SQLquery = "SELECT * FROM pokemon WHERE $1 LIKE ANY (TYPE);";
  const searchType = `${
    type[0].toUpperCase() + type.substring(1).toLowerCase()
  }`;
  const { rows } = await query(SQLquery, [searchType]);

  return rows;
}

async function addPokemon(pokemon) {
  const { name, type, HP, Attack, Defense, Speed } = pokemon;
  const sqlQuery =
    "INSERT INTO pokemon (name, type, hp, attack, defense, sp_attack, sp_defense, speed) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);";

  const { rows } = await query(sqlQuery, [
    name,
    type,
    HP,
    Attack,
    Defense,
    pokemon["Sp. Attack"],
    pokemon["Sp. Defense"],
    Speed,
  ]);

  return rows;
}

/*
Declaring an async function that takes in an object
Destructure the object into its components
Write a SQL string to update the given pokemon
Await and save the result of calling query with the string and parameters (destructure rows)
return the result
*/

async function updatePokemon(pokemon) {
  const { id, name, type, hp, attack, defense, sp_attack, sp_defense, speed } =
    pokemon;
  const sqlQuery =
    "UPDATE pokemon SET name = $1, type = $2, hp = $3, attack = $4, defense = $5, sp_attack = $6, sp_defense = $7, speed = $8 WHERE id = $9";

  const { rows } = await query(sqlQuery, [
    name,
    type,
    hp,
    attack,
    defense,
    sp_attack,
    sp_defense,
    speed,
    id,
  ]);

  return rows;
}

/*
async function(pokemon)
store our column headers in an array
destruct into id, column and value
check to see if the column name matches any of our column headers
  if it doesn't, return an error

sql query string - updata pokemon SET column = $1, use string interpolation to insert the verified column name
rsult = await query string [params]
return result
*/

async function patchPokemon(pokemon) {
  const colNames = [
    "name",
    "type",
    "hp",
    "attack",
    "defense",
    "sp_defense",
    "sp_attack",
    "speed",
  ];
  const { id, column, value } = pokemon;
  const columnValid = colNames.includes(column.toLowerCase());

  if (!columnValid) {
    throw new Error("Column does not exist in database");
  }
  const sqlQuery = `UPDATE pokemon SET ${column} = $1 WHERE id = $2 RETURNING *;`;
  const { rows } = await query(sqlQuery, [value, id]);
  return rows;
}

async function deletePokemon({ id }) {
  sqlQuery = "DELETE * FROM pokemon WHERE id = $1;";
  const result = await query(sqlQuery, [id]);
  return result;
}

module.exports = {
  getAllPokemon,
  getPokemonById,
  getPokemonByName,
  getPokemonByType,
  addPokemon,
  updatePokemon,
  patchPokemon,
  deletePokemon,
};
