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

// upload image
const multer          = require('multer');
const upload          = multer({ dest: './public/uploads/' });



router.get("/signup", (req, res) => {
    res.render('passport/signup');
  // JobFamily.find({}, (err, families) => {
    // if (err) {
    //   next(err);
    // } else {
    //   res.render("passport/signup", { families: families });
    // }
  // })
});

router.post("/signup", upload.single('avatar'), (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName  = req.body.lastName;
  const password  = req.body.password;
  const age       = req.body.age;
  const mail      = req.body.mail;
  const phone     = req.body.phone;
  const gender    = req.body.gender;
  const avatar    =  `uploads/${req.file.filename}`;
  
  
  if (firstName === "" || lastName === "" ||  password === "" || age === "" || mail === "" || gender === "") {
    res.render("passport/signup", { message: "Please fill all fields" });
    return;
  };
  console.log(mail)
  User.findOne({ mail }, "mail", (err, user) => {
    console.log(user)
    if (user !== null) {
      res.render("passport/signup", { message: "The Email address is already associated with an existing account " });
      return;
    }
    const salt     = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    const newUser = User({
      firstName: firstName,
      lastName: lastName,
      password: hashPass,
      age: age,
      mail: mail,
      phone: phone,
      gender: gender,
      avatar: avatar,
    });
    console.log(newUser);
    newUser.save((err) => {
      if (err) {
        res.render("passport/signup", { message: "Something went wrong" });
      } else {
        req.login(newUser, function (err) {
                if ( ! err ){
                    res.redirect('/user');
                } else {
                    console.log(err)
                }
            })
      }
    });
  });
});

router.get("/login", (req, res) => {
  console.log('entro al login');
  res.render("passport/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/private",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'Logged you out!');
  res.redirect('/login');
});

router.get('/show',  ensureLogin.ensureLoggedIn(), (req, res) => {
    res.render('passport/show', { user: req.user} );

});


// router.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
//   res.render("passport/private", { user: req.user , layout: 'layouts/logged-layout.ejs' });
// });

module.exports = router;

