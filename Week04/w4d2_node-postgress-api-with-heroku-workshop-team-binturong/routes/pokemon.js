/*
Require Router() from express
create router variable as new Router

Create basic get route that will go to path / and have an async callback function taking in a req and res
Call our to-be-created function get all pokemon and await the response.
Send the response back in an object  with a success boolean
*/
const { Router } = require("express");
const router = new Router();

const {
  getAllPokemon,
  getPokemonById,
  getPokemonByName,
  getPokemonByType,
  addPokemon,
  updatePokemon,
  patchPokemon,
  deletePokemon,
} = require("../models/pokemon");

router.get("/", async (req, res) => {
  try {
    const { name, type } = req.query;
    if (name) {
      const data = await getPokemonByName(name);
      res.json({
        success: true,
        payload: data,
      });
      return;
    } else if (type) {
      const data = await getPokemonByType(type);
      res.json({
        success: true,
        payload: data,
      });
      return;
    }

    const data = await getAllPokemon();
    res.json({
      success: true,
      payload: data,
    });
  } catch (error) {
    res.json({
      success: false,
      payload: `error ${error} has occured`,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getPokemonById(Number(id));
    res.json({
      success: true,
      payload: data,
    });
  } catch (error) {
    res.json({
      success: false,
      payload: `error ${error} has occured`,
    });
  }
});

/*
Deconstruct name from req.query
call getpokemonbyname using name and await the response
*/

router.post("/", async (req, res) => {
  const { body } = req;
  const data = await addPokemon(body);
  try {
    res.json({
      success: true,
      payload: data,
    });
  } catch (error) {
    res.json({
      success: false,
      payload: `error ${error} has occured`,
    });
  }
});

/*
Call the router with put, pass in the path, and declare and async callback function
Destructure the body from req
In a try block, await and save the response of sending body to updatePokemon
Send the response to the user in a json object
Catch the error and send it back as a json object
*/
router.put("/", async (req, res) => {
  const { body } = req;
  try {
    const data = await updatePokemon(body);
    res.json({
      success: true,
      message: "Pokemon updated",
      payload: data,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "PUT request failed",
      payload: err,
    });
  }
});

/*
.patch request asycn
destruct body from req
try
response = await patchPokemon feed in body
res.json:
succes is true
catch 
res.json success is false
*/

router.patch("/", async (req, res) => {
  try {
    const { body } = req;
    const data = await patchPokemon(body);
    res.json({
      success: true,
      message: "patched pokemon!",
      payload: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `there is an ${error}`,
    });
  }
});

/*
async router.delete
body -> pokemon id
await tbc funtion
res.json
try and catch
*/

router.delete("/", async (req, res) => {
  try {
    const { body } = req;
    const data = deletePokemon(body);
    res.json({
      success: true,
      message: "Pokemon has been deleted",
      payload: data,
    });
  } catch (error) {
    res.json({ success: false, message: `error ${error} has occured` });
  }
});

module.exports = router;
