const { query } = require('../db');

async function getAllJokes() {
  const result = await query('SELECT * FROM jokes;');
  return result.rows;
}

async function getJokeById(id) {
  const result = await query('SELECT * FROM jokes WHERE id = $1;', [id]);
  return result.rows[0];
}

async function addJoke(joke) {
  const result = await query(
    'INSERT INTO jokes (text) VALUES ($1) RETURNING id;',
    [joke.text]
  );
  return result.rows[0].id;
}

module.exports = {
  getAllJokes,
  getJokeById,
  addJoke,
};
