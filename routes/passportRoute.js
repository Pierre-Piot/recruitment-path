const express         = require("express");
const router          = express.Router();
// User model
const User            = require("../models/user");
const JobFamily       = require('../models/jobFamily');
// Bcrypt to encrypt passwords
const bcrypt          = require("bcrypt");
const bcryptSalt      = 10;
const ensureLogin     = require("connect-ensure-login");
const passport        = require('passport');


router.get("/signup", (req, res) => {
  console.log("Entro al signup");
    res.render('passport/signup');
  // JobFamily.find({}, (err, families) => {
    // if (err) {
    //   next(err);
    // } else {
    //   res.render("passport/signup", { families: families });
    // }
  // })
});
router.post("/signup", (req, res, next) => {
  console.log("Entro al post");
  const name = "";
  const password = req.body.password;
  const age = req.body.age;
  const mail = req.body.mail;
  const gender = req.body.gender;
  const offers = [];
  if (password === "" || age === "" || mail === "" || gender === "") {
    res.render("passport/signup", { message: "Please fill all fields" });
    return;
  }
  console.log("Email del usuario",mail);
  User.findOne({ mail }, "mail", (err, user) => {
    if (user !== null) {
      res.render("passport/signup", { message: "The Email address is already associated with an existing account " });
      return;
    }
    const salt     = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    const newUser = User({
      name: name,
      password: hashPass,
      age: age,
      mail: mail,
      gender: gender,
      offers: offers
    });
    console.log(newUser);
    newUser.save((err) => {
      if (err) {
        res.render("passport/signup", { message: "Something went wrong" });
      } else {
        res.redirect("/");
      }
    });
  });
});

router.get("/login", (req, res) => {
  console.log('entro al login');
  res.render("passport/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("passport/private", { user: req.user });
});
module.exports = router;