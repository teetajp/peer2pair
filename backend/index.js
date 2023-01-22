const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express Route Definitions
app.get("/", (req, res) => {
    res.send("Hi");
})

app.listen(4000, (err) => {
    console.log("Listening");
})