const express = require("express");
const app = express();

require("dotenv").config();

const morgan = require("morgan");
const port = process.env.PORT;
const host = process.env.HOST;
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200,
};

const urlServices = require("./services/urlServices");
const urlDb = require("./data/urlDb");

app.use(morgan("short"));
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to database
const mongoose = require("mongoose");

const databaseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DB, databaseOptions)
  .then(() => {
    console.log("Database conected...");
  })
  .catch((err) => console.log(err));

//routes
app.get("/:shortUrlId", async (req, res) => {
  try {
    const url = await urlDb.find(req.params.shortUrlId);
    return !url
      ? res.status(404).send("Not found")
      : res.redirect(301, url.longURL);
  } catch (error) {
    return res.status(500).send("Something went wrong. Please try again.");
  }
});

app.post("/url", async (req, res) => {
  try {
    if (!!urlServices.validateUrl(req.body.url))
      return res.status(400).send({ msg: "Invalis URL." });

    const urlKey = urlServices.generateUrlKey();
    const shortUrl = `http://${host}:${port}/${urlKey}`;

    await urlDb.save(req.body.url, shortUrl, urlKey);
    return res.status(200).send({ shortUrl });
  } catch (error) {
    return res
      .status(500)
      .send({ msg: "Something went wrong. Please try again" });
  }
});

app.listen(port, () => console.log(`Server strated on port: ${port}`));
