const express = require("express");

const path = require("path");
const hbs = require("hbs");

const app = express();

const port = process.env.PORT || 8000;

const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
