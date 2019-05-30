const axios = require("axios");
const express = require("express");
const app = express();
const port = 9000;
const cors = require("cors");

app.use(cors());

app.get("/quote", (req, res) => {
  axios
    .get(
      "https://healthruwords.p.rapidapi.com/v1/quotes/?id=731&t=Wisdom&maxR=1&size=medium"
    )
    .then(result => {
      res.send(result.data.items[0].volumeInfo.authors);
    });
});

app.get("/joke", (req, res) => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=intitle:" +
          req.params.title
      )
      .then(result => {
        res.send(result.data.items[0].volumeInfo.authors);
      });
  });

app.listen(port, () => console.log("App listening..."));