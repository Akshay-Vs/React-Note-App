/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const mongodbUsername = process.env.MONGODB_USERNAME;
const mongodbPassword = process.env.MONGODB_PASSWORD;

const uri = `mongodb+srv://${mongodbUsername}:${mongodbPassword}@cluster0.jfoqd5t.mongodb.net/?retryWrites=true&w=majority`;
let db;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    console.log("Pinging MongoDB...");
    await client.connect();
    db = client.db("DB1");
    console.log("Ping confirmed. MongoDB connection established!");

    app.listen(port, () => {
      console.log(`Server is running on port ${port} and connected to the database.`);
    });
  } catch (error) {
    console.error(error);
  }
}

run();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  try {
    res.send("Hello World!");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/getNote/:id", async (req, res) => {
  try {
    console.log("Request received: ", req.params.id);
    const note = await db.collection("Notes").findOne({ id: req.params.id });
    res.status(200).send(note);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/getNotes", async (req, res) => {
  try {
    console.log("Request received to get all notes");
    const notes = await db.collection("Notes").find({}).toArray();
    res.status(200).send(notes);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.post("/createNote", async (req, res) => {
  try {
    const { info, text } = req.body;
    if (!info || !text) {
      return res.status(400).send("Invalid request body");
    }
    const id = uuidv4();
    const note = { id, info, text };
    await db.collection("Notes").insertOne(note);
    res.status(200).json({ message: "Note created", id });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.post("/updateNote", async (req, res) => {
  try {
    const { id, info, text } = req.body;
    if (!id || (!info && !text)) {
      return res.status(400).send("Invalid request body");
    }
    const note = await db.collection("Notes").findOne({ id: id });
    if (!note) {
      return res.status(404).send("Note not found");
    }
    let updateFields = {};
    if (info) updateFields["info.timeModified"] = info.timeModified;
    if (text) {
      if (text.title) updateFields["text.title"] = text.title;
      if (text.content) updateFields["text.content"] = text.content;
    }
    await db.collection("Notes").updateOne({ id: id }, { $set: updateFields });
    res.status(200).send("Note updated");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.post("/deleteNote/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("Invalid request parameters");
    }
    const note = await db.collection("Notes").findOne({ id: id });
    if (!note) {
      return res.status(404).send("Note not found");
    }
    await db.collection("Notes").deleteOne({ id: id });
    res.status(200).send("Note deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});
