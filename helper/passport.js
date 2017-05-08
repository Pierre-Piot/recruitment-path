const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Require the Mongoose models
const User = require('../models/user.js');

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  User.findOne({ _id: id }, (err, user) => {
    if (err) { return cb(err); }
    return cb(null, user);
  });
});

passport.use(new LocalStrategy({ passReqToCallback: true }, (req, username, password, next) => {
    console.log("this is the user: ", username)
  User.findOne({ mail: username }, (err, user) => {
    console.log(user)
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("hola", user);
      req.flash('error', 'Incorrect username');
      return next(null, false);
    }
    if (!bcrypt.compareSync(password, user.password)) {
      req.flash('error', 'Incorrect password');
      return next(null, false);
    }

    return next(null, user);
  });
}));

module.exports = passport;
