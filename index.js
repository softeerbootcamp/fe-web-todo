const express = require("express");
const { appendFile } = require("fs");
const server = express();

server.use(express.static('/public'));

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
});