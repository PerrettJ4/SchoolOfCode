// db config
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});
// export query function for use in app

module.exports = {
  query: (sql, values, callback) => {
    return pool.query(sql, values, callback);
  },
};
