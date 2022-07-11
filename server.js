const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv")

const app = express();
const port = process.env.PORT || 8080 ;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Server is on" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});