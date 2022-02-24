//Sample data to use:
const cats1 = [
  {
    name: 'Poppy',
    human: 'Tim',
    hobby: 'screm',
  },
  {
    name: 'Tony',
    human: 'Liz.K',
    hobby: 'cling',
  },
  {
    name: 'Narla',
    human: 'Mell',
    hobby: 'obstruct',
  },
];


const { query }  = require("../index");
const { cats }= require("../../cats-data");

console.log(cats)
console.log(cats[0])

//create async function name 
//insert dummy data into sql table
//await query
// inside the async - create for each 

async function populateTable() {

 cats.forEach(async (cat) => { 
  
 const response = await query((`INSERT INTO cats (catId, catName, human, hobby) VALUES ($1, $2, $3, $4)`), [cat.id, cat.name, cat.human, cat.hobby]);
 console.table(response.rows)
 });

 console.log("Inserted Data!") 
}

populateTable()
// module.exports = { populateTable }