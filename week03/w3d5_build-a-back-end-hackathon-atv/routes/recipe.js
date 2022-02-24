const express = require("express");
const router = express.Router();

const { recipe } = require("../recipedata.js")

router.get("/", (req, res) => {
    const searchResults = recipe
    console.log(recipe)
    res.json({ 
        success: true, 
        message: `Here is your recipe for ${recipe[0].title}`, 
        payload: searchResults
        // get recipes from db model
    });
})

// Write recipe 
router.post("/", (req, res) => {
    // 
})

module.exports = router;