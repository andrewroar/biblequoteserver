const express = require("express");
const axios = require("axios");
const db = require("../models");
const apiRouter = express.Router();
//const bcrypt = require("bcrypt");

//////////////////////

const getAllQuotes = async (_, res) => {
  console.log(res.body);
  try {
    const quotes = await db.bibleQuote.find({});
    console.log(quotes);

    res.json({
      results: quotes,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const AddQuotes = async (req, res) => {
  try {
    const payload = req.body;

    await db.bibleQuote.create({
      title: payload.title,
      content: payload.content,
    });

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//const removeCard = async (req, res) => {
//  try {
//    const { id } = req.params;
//    const customcards = await db.CustomCards.findById(id);
//    const { password } = req.body;
//
//    const validPassword = await bcrypt.compare(password, customcards.password);
//    console.log(validPassword);
//    if (validPassword) {
//      await db.CustomCards.findByIdAndDelete(id);
//      res.json({
//        success: true,
//      });
//    } else {
//      res.status(401).json({
//        success: false,
//        message: "Failed user authentication",
//      });
//    }
//  } catch (error) {
//    res.status(200);
//  }
//};

apiRouter.get("/", getAllQuotes);
apiRouter.post("/", AddQuotes);

module.exports = apiRouter;
