const path = require('path');
const express = require('express');
const app = express();
const port = 5000;

const { getAllCats, addCat, updateCat } = require('./models/cats');
const { Router } = require('express');

app.use(express.static('public'));
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`));
});

/* Your tasks for part 1: 🔻 
- 👉 Add the code that uses the existing port variable to tell your server which port to use 
(and add a console.log so that you know it's listening on the correct port!). */

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

/*- 👉 Add request handlers for your API that will handle requests to the path "/cats" for all the 
cats, providing the data in the cats array in this file. Test this in your browser.
- 👉 Add code to also handle requests for a cat by id using params and cats by name using a query. 
Test this in your browser.*/

/* 
Plan
Write an app.get that gets all of the cats from the array above

Data will be returned in an object along with with a success boolean and a message

Write an app.get that takesin id as a query param
Convert the id to a number
Save the resulting object of using .find(id) on the cat array
Return the data in an object along with a success boolean and a message

Write an app.get that takes in a name as a query param
Save the results of using .filter(name) on the cats array
Return the data in an object along with a success boolean and a message
*/

app.get('/api/cats', async (req, res) => {
  const cats = await getAllCats();
  res.json({
    success: true,
    message: 'Return all cats',
    payload: cats,
  });
});

app.get('api/cats/:id', (req, res) => {
  const { id } = req.params;
  const searchResult = cats.find((cat) => cat.id == id);
  res.json({
    success: true,
    message: `Cat with id ${id} found`,
    payload: searchResult,
  });
});

app.get('/api/cats/:name', (req, res) => {
  const { name } = req.params;
  const searchResults = cats.filter((cat) =>
    cat.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json({
    success: true,
    message: `Cats with name ${name} found`,
    payload: searchResults,
  });
});

/*- 👉 Go to main.js in the views folder, and write the code needed to hook up the button with id 
"get-cats" to show the data on the front end.
*/

/* 
Write router.post request to api/cats
pass in request and response to an async function
Destructure the body from the request
Call our helper function with the body and await the response
return the res.json with information about what was done
*/

app.post('/api/cats', async (req, res) => {
  const { body } = req;
  const data = await addCat(body);
  return res.json({
    success: true,
    message: 'Cat added',
    payload: data.rows,
  });
});

/* 
Put request to path name, and pass in req and res
get the body 
callback function and pass in the body
store in data
return response.json( data.rows and id) 
*/

app.put("/api/cats", async (req, res) => {
  const { body } = req;
  const data = await updateCat(body)
  return res.json({
    success: true,
    message: "updated cat",
    payload: data.rows,
  })
})