var express           = require('express');
var router            = express.Router();
const auth = require('../helper/auth');
const ensureLogin     = require("connect-ensure-login");



/* GET users listing. */
router.get('/profile', ensureLogin.ensureLoggedIn(), function(req, res, next) {
  console.log("user logged in");
  let user = req.user;
  res.render("profile", { user: user})
});


router.get("/profile/edit", ensureLogin.ensureLoggedIn(), (req, res) => {
  let user = req.user;
  res.render("passport/edit",  { user, "message": req.flash("error") });
});


router.post("/profile/delete", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const idUser = req.params.id;
  User.findByIdAndRemove({ _id: idUser } , (err, user) => {
    if (err) throw err; 
  }); req.flash('success', `${User} - was successfully deleted!`);
      alert("Your profile was successfully updated");
      res.redirect('/');
  });


// Isak's
// DELETE a experience
router.get('/:id/delete', auth.checkLoggedIn('You need to login to access this page', '/login'), (req, res) => {
  const idexp = req.params.id;
  Experience.findOneAndRemove({ _id: idexp }, (err, result) => {
    if (err) throw err;
    User.findOneAndUpdate({ _id: req.user }, { $pull: { experiences: idexp } }, (err, result) => {
      if (err) throw err;
      req.flash('success', `${result.name} - was successfully deleted!`);
      res.redirect('/profile');
    });
  });
});



module.exports = router;