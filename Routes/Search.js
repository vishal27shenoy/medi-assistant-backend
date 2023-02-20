const express = require("express");
const mongoose = require("mongoose");
const Schema = require("../Model/model");
const app = express();
app.get("/Search", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  Schema.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send(user);
    } else {
      res.send({ message: "User not Found" });
    }
  });
});

module.exports = app;
