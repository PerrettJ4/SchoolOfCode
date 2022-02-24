import { Idb, IDataObject } from '../../../types/database';

const db: Idb = require('../../index');
const { data }: { data: Array<IDataObject> } = require('../../data');

async function populateTable() {
  const sqlQuery = `INSERT INTO bootcamps 
    (name, region, startdate) 
    VALUES ($1, $2, $3)
    RETURNING *;`;

  for (let i = 0; i < data.length; i++) {
    const response = await db.query(sqlQuery, [
      data[i].name,
      data[i].region,
      data[i].startDate,
    ]);

    console.log(response);
  }

  console.log('Bootcamps table populated');
}

populateTable();
