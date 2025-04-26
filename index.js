const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get("/", (req, res) => readFile("./index.html", res));
app.get("/about", (req, res) => readFile("./about.html", res));
app.get("/contact-me", (req, res) => readFile("./contact-me.html", res));
app.use((req, res) => readFile("./404.html", res));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

const readFile = (filePath, res) => {
  const absolutePath = path.resolve(filePath);

  fs.readFile(absolutePath, "utf8", (err, data) => {
    if (err) {
      res.status(404).send("404 - Page not found");
      return;
    }
    res.status(200).send(data);
  });
};
