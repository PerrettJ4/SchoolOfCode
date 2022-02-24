const express = require("express")
const router = express.Router()

const { cats } = require("../cats-data") 
//  make ^ = to the selected data

const { query }  = require("../db/index");


// by /cats 
router.get("/", (req, res) => {
    async function selectTableData() {
        const SQLquery = "SELECT * FROM cats" 
        const table = await query(SQLquery)
        console.table(table.rows)
        console.log("Data has been selected!")
        res.json({
            success: true,
            message: `Here are all ${table.rows.length} cats`,
            payload: table.rows,
          })
    };
    selectTableData()  
    /*res.json({
      success: true,
      message: `Here are all ${cats.length} cats`,
      payload: cats,
    })*/
  })
  
  // by ID
router.get("/:id", (req, res) => {
    console.log("id firing!")
    const { id } = req.params;
    const requestedCat = cats.find((cat) => {
        console.log(cat.id, id)
        return cat.id == id;
    })
    console.log(req.params, "HERE", cats);
    res.json({
        success: true,
        message: `found cat by id ${id}`,
        payload: requestedCat,
    })
});

module.exports = router