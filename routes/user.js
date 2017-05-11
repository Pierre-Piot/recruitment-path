var express           = require('express');
var router            = express.Router();
const ensureLogin     = require("connect-ensure-login");



/* GET users listing. */
router.get('/profile', ensureLogin.ensureLoggedIn(), function(req, res, next) {
  console.log("user logged in");
  let user = req.user;
  res.render("profile", { user: user})

});

module.exports = router;
