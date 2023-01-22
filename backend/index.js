require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express Route Definitions
app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/users", (req, res) => {
  let sql = "SELECT id, email, name, _created FROM users";
  db.query(sql, (err, result) => {
    if (err) { res.send(err); }
    else {
      res.send(result);
    }
  })
})

app.get("/communities", (req, res) => {
  let sql = "SELECT name FROM communities ORDER BY name";
  db.query(sql, (err, result) => {
    if (err) { res.send(err); }
    else {
      res.send(result);
    }
  })
})

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
