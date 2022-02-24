
const { query } = require('../index');
const data = require('../../pokemon-data')

async function populateTable(data) {
    const sqlQuery = 'INSERT INTO pokemon (name, type, hp, attack, defense, sp_defense, sp_attack, speed) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';

    for(pokemon of data){
    const { rows } = await query(sqlQuery, [pokemon.name, pokemon.type, pokemon.HP, pokemon.Attack, pokemon.Defense, pokemon['Sp. Defense'], pokemon['Sp. Attack'], pokemon.Speed]);
    console.log(rows);
}
console.log('Pokemon table populated');
}

populateTable(data);
