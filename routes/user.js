var express           = require('express');
var router            = express.Router();

const auth            = require('../helper/auth');

const ensureLogin     = require("connect-ensure-login");
const User            = require('../models/user');


// edit profile
router.get("/profile/edit", ensureLogin.ensureLoggedIn(), (req, res) => {
  let user = req.user;
  res.render("passport/edit",  { user, "message": req.flash("error") });
});

/* GET users listing. */
router.get('/profile/:id', ensureLogin.ensureLoggedIn(), function(req, res, next) {
  console.log("user logged in");
  let user = req.user;
  res.render("passport/profile", { user: user})
});

// delete profile
router.post("/profile/delete/:id", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const idUser = req.params.id;
  User.findByIdAndRemove({ _id: idUser } , (err, user) => {
    if (err) throw err; 
    req.logout();
    req.flash('success', 'Logged you out!');
    res.render('passport/deleted', {layout: "layouts/logged-layout.ejs"});
  });
  });





module.exports = router;