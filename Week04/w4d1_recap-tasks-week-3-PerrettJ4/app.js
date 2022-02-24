const path = require("path");
const express = require("express");
const app = express();
const port = 5000;

const catRouter = require("./routes/cats.js")

app.use(express.static("public"));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`));
});

app.use("/api/cats", catRouter)
// attaching a router to a specfic path

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

/* Your tasks for part 1: 🔻 
- 👉 Add the code that uses the existing port variable to tell your server which port to use 
(and add a console.log so that you know it's listening on the correct port!). X
- 👉 Add request handlers for your API that will handle requests to the path "/cats" for all the cats, providing the data in the cats array in this file. Test this in your browser.
- 👉 Add code to also handle requests for a cat by id using params and cats by name using a query. 
Test this in your browser.
- 👉 Go to main.js in the views folder, and write the code needed to hook up the button with id 
"get-cats" to show the data on the front end.
*/
