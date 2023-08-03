const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Jwt_secret } = require("../key");
const requireLogin = require("../middleware/requireLogin");

router.get("/", (req, res) => {
  res.send("hello");
});
router.get("/createPost", requireLogin, (req, res) => {
  console.log("hello auth");
});

router.post("/signup", (req, res) => {
  const { name, userName, email, password } = req.body;
  if (!name || !email || !userName || !password) {
    res.status(422).json({ error: "Add all fields" });
  }
  USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then(
    (savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "user already exist" });
      } else {
        bcrypt.hash(password, 11).then((dumpPassword) => {
          const user = new USER({
            name,
            email,
            userName,
            password: dumpPassword,
          });
          user
            .save()
            .then((user) => {
              res.json({ message: "Submit succesfully" });
            })
            .catch((err) => console.log(err));
        });
      }
    }
  );
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({
      error: "Sumimasen! Add your Email and Password Onegaishimasu (°°)",
    });
  }
  USER.findOne({ email: email }).then((findUser) => {
    if (!findUser) {
      return res.status(422).json({ error: "Email not Found" });
    }
    bcrypt
      .compare(password, findUser.password)
      .then((match) => {
        if (match) {
          // return res.status(200).json({ message: "Login successfull" });
          const token = jwt.sign({ _id: findUser.id }, Jwt_secret);
          res.json(token);
          console.log(token);
        } else {
          return res.status(422).json({ error: "Wrong password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
