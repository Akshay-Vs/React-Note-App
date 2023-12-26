/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let notes = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getNote/:id", (req, res) => {
  console.log("Request received: ", req.params.id);
  const note = notes.find((note) => note.id === req.params.id);
  res.status(200).send(note);
});

app.get("/getNotes", (req, res) => {
  console.log("Request received: ", req.body);
  res.status(200).send(notes);
});

app.post("/createNote", (req, res) => {
  const { id, info, text } = req.body;
  if (!id || !info || !text) {
    return res.status(400).send("Invalid request body");
  }
  notes.push({ id, info, text });
  res.status(200).send("Note created");
});

app.post("/updateNote", (req, res) => {
  const { id, info, text } = req.body;
  if (!id || !info || !text) {
    return res.status(400).send("Invalid request body");
  }
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex === -1) {
    return res.status(404).send("Note not found");
  }
  notes[noteIndex] = { id, info, text };
  res.status(200).send("Note updated");
});

app.listen(5000, () => console.log("Server running on port 5000"));
module.exports = app;