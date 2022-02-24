const { query } = require('../index');

async function dropTable() {
  const response = query('DROP TABLE IF EXISTS pokemon;');
  console.log('Pokemon table deleted');
}

dropTable();
