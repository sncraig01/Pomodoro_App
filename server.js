const axios = require("axios");
const express = require("express");
const app = express();
const port = 9000;
const cors = require("cors");

app.use(cors());

app.get("/quote", (req, res) => {
  axios
    .get(
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
    )
    .then(result => {
      res.send(result.data.quoteText + "    -" + result.data.quoteAuthor);
    });
});

app.get("/joke", (req, res) => {
  axios
    .get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    })
    .then(result => {
      res.send(result.data);
    });
});

app.listen(port, () => console.log("App listening..."));
