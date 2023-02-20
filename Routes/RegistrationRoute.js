const express = require("express");
const mongoose = require("mongoose");
const Schema = require("../Model/model");
const app = express();
app.post("/Register", async (req, res) => {
  console.log(req.body);
  const { firstname, lastname, email, gender, password, confirmpassword } =
    req.body;
  Schema.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "UnSucessfull" });
    } else {
      const SchemaValue = new Schema({
        firstname: firstname,
        lastname: lastname,
        email: email,
        gender: gender,
        password: password,
      });
      SchemaValue.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Sucessfull" });
        }
      });
    }
  });
});
module.exports = app;
