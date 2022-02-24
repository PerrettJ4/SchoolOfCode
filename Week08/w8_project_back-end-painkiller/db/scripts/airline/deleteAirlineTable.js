const { query } = require("../../index");

async function deleteTable() {
  const sqlQuery = "DROP TABLE IF EXISTS airlines";

  const _response = await query(sqlQuery);
  console.log("airlines table deleted");
}

if (require.main === module) {
  deleteTable()
    .catch(console.error)
    .finally(() => pool.end());
}

module.exports = deleteTable;
