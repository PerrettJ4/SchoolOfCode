const express = require("express");
const router = express.Router()

const { books }= require("../books-data.js")

router.get("/", (req, res) => {
const { title } = req.query;

if (title) {
    const searchResults = books.filter((book) => (book.title.toLowerCase().includes(title.toLowerCase())) 
        );
res.json({
    success: true, 
    message: `${searchResults.map(book => book.title).join(", ")}`, 
    payload: searchResults })
    }

else if (author) {
    const searchResults = books.filter((author) => {
    if (book.title.toLowerCase().includes(author.toLowerCase())) {
        return true;
        }
    });
res.json({
    success: true, 
    message: `${searchResults.map(book => book.author).join(", ")}`, 
    payload: searchResults })
    }

res.json({
success: true, 
message: "all books", 
payload: books })
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const requestedBook = books.filter((book) => {
        return book.id == id;
    })
    console.log(req.params, "HERE", requestedBook);
    res.json({
        success: true,
        message: `found book id ${id}`,
        payload: requestedBook,
    })
});

module.exports = router