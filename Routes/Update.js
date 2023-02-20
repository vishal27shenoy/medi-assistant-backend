const express = require("express");
const mongoose = require("mongoose");
const Schema = require("../Model/model");
const app = express();
app.put("/update", async (req, res) => {
  console.log(req.body.email);
  Schema.collection.findOneAndUpdate(
    { email: req.body.email },
    { $set: { ...req.body } },
    { new: true }
  );
  res.send("hello");
});

module.exports = app;
