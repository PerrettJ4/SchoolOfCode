const path = require("path");
const express = require("express");
const app = express();

const port = 5000;

app.use(express.static("public"));
app.use(express.json());


const recipeRouter = require("./routes/recipe");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, `views`, `index.html`));
});

app.use("/api/recipes", recipeRouter) 

 app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// move data to data.js
// get request
// create routes folder
// insert recipe.js file
// move get request over to router
// export router  
// call Router from main.js ✅

// when the "create recipe button is pressed", pull throught the data and insert into insert function

