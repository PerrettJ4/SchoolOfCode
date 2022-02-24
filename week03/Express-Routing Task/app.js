const express = require("express");
const app = express();
const port = 3000;

const booksRouter = require("./routes/books")

app.get("/", (req, res) => {
  res.json({ message: "Hello from the root path!" });
});

app.use("/books", booksRouter) 
// attaching a router to a specific path

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

