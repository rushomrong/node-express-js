const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the first server");
});

app.listen(port, () => {
  console.log(`This is the first server : ${port}`);
});
