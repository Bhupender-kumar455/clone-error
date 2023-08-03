const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const { mongoURL } = require("./key");
const cors = require("cors");

app.use(cors());
require("./models/model");
require("./models/post");
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/createPost"));

// app.use(require("./routes/user"));

mongoose
  .connect(mongoURL)
  .then(() => {
    app.listen(port);
    console.log("connected to Database!");
  })
  .catch((err) => {
    console.log(err);
  });
