//const { client } = require("express")()
const { Pool } = require('pg')

// back-end plan
// bring in with express✅

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Tuesday@540',
  port: 5432,
})

/*pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})*/

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}

// issue create db command
// create table command in here
// insert dummy data which exist