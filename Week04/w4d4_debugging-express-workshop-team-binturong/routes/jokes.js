var express = require("express");
var router = express.Router();

const {
  getAllJokes,
  getJokeById,
  addJoke,
  deleteJoke,
} = require("../model/jokes");

router.get("/", async function (req, res) {
  const jokes = await getAllJokes();
  res.json({ success: true, data: jokes });
});

router.get("/:id", async function (req, res) {
  const id = req.params.id;
  const joke = await getJokeById(id);
  res.json({ success: true, payload: joke });
});

router.post("/", async function (req, res) {
  const { body } = req;
  const id = await addJoke(body);
  res.json({ success: true, message: `joke has been created with id ${id}` });
});

router.delete("/", async function (res, req) {
  const { body } = req;
  const _data = await deleteJoke(body);
  res.json({
    success: true,
    message: "id: " + body.id + "joke deleted",
  });
});

module.exports = router;
