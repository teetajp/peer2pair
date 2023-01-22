require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Client } = require("pg");

// CockroachDB Database Connection
const client = new Client(process.env.DATABASE_URL);

// client.connect();
(async () => {
  await client.connect();
  try {
    const results = await client.query("SELECT NOW()");
    console.log(results);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    client.end();
  }
})();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express Route Definitions
app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(4000, (err) => {
  console.log("Listening");
});
