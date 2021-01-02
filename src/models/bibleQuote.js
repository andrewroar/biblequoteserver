const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const bibleQuote = mongoose.model("bibleQuote", schema);

module.exports = bibleQuote;
