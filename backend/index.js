require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const { response } = require("express");


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

app.get("/groups/:community_id", (req, res) => {
  const groups = "`groups`";
  let sql = `SELECT name FROM ${groups} WHERE community_id=${req.params.community_id}`;
  
  db.query(sql, (err, result) => {
    if (err) {res.send(err)}
    else {
      res.send(result);
    }
  })
})



app.post("/group/:user_id/:group_id", (req, res) => {
  let sql = `INSERT INTO users_groups (user_id, group_id) VALUES (${req.params.user_id}, ${req.params.group_id})`;
  console.log(sql);

  db.query(sql, (err, result) => {
    if (err) { res.send(err);}
    else{
      return response.status(202).json({
        message:  `user with id ${req.params.user_id} joined group id ${req.params.group_id}`
      })
    }
  })

  
})

app.get("/posts/:group_id", (req, res) => {
  let sql = `SELECT * FROM posts WHERE group_id=${req.params.group_id} `;

  db.query(sql, (err, result) => {
    if (err) {res.send(err)}
    else {
      res.send(result);
    }
  })
})

app.post("/posts/:author_id/:group_id", (req, res) => {
  const body = req.body;
  console.log(body);

  if (!body.title || !body.content){
    return response.status(400).json({
      error: "missing either title or content"
    });
  }
  let sql = `INSERT INTO posts (title, content, author_id, group_id) VALUES ("${body.title}", "${body.content}", ${Number(req.params.author_id)}, ${Number(req.params.group_id)})`;
  db.query(sql, (err, res) => {
    if (err) {res.send(err);}
    else{
      const savedPost = {
        title: body.title,
        content: body.content,
        author_id: req.params.author_id,
        group_id: req.params.group_id
      }
      response.json(savedPost);
    }
  })
})

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
