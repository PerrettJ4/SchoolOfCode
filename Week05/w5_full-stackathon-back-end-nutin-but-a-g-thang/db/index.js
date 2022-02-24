const { Pool } = require("pg/lib");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

module.exports = {
  pool,
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
