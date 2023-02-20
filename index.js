const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Registration = require("./Routes/RegistrationRoute");
const Search = require("./Routes/Search");
const update = require("./Routes/Update");
app.use(express.urlencoded());
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://0.0.0.0:27017/patientDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Sucessfull of DB"))
  .catch((err) => console.log(err));
app.use(Registration);
app.use(Search);
app.use(update);
app.listen(3001, () => {
  console.log("Connection Sucessfull");
});
