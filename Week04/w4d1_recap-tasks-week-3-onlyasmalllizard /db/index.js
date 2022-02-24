const { Pool } = require('pg');
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'Tuesday@540',
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
