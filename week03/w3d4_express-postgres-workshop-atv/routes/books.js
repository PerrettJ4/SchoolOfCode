
const { books, authors } = require("../data.js")

router.get("/", (req, res) => {
const { title } = req.query;

if (title) {
    const searchResults = books.filter((book) => {
    if (book.title.toLowerCase().includes(title.toLowerCase())) {
        return true;
        }
    });
res.json({
    success: true, 
    message: `found book with title ${searchResults[0].title}`, 
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
    message: `found book with author ${searchResults[0].author}`, 
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