const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 1337;

app.get("/", function (_, res) {
  console.log("Someone visited the home page!");
  res.sendFile(path.join(__dirname, "/_site/index.html"));
});

app.get("/docs", function (_, res) {
  console.log("Someone visited the docs page!");
  res.sendFile(path.join(__dirname, "/_site/docs/index.html"));
});

app.use(express.static("_site/assets"));

app.listen(port);

console.log("Server started at http://localhost:" + port);
