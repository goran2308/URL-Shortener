const Url = require("../models/Url");

const save = (longURL, shortURL, shortUrlId) => {
  Url.create({ longURL, shortURL, shortUrlId });
};

const find = (shortUrlId) => Url.findOne({ shortUrlId: shortUrlId });

module.exports = { save, find };
