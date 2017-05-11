module.exports = {
    setCurrentUser: function (req, res, next) {
        if (req.isAuthenticated()) {
            res.locals.currentUser = req.user;
            res.locals.isUserLoggedIn = true;
        } else {
            res.locals.isUserLoggedIn = false;
        }
        next();
    },
    checkLoggedIn: (redirectPath) => {
        return (req, res, next) => {
            if (req.isAuthenticated()) {
                next();
            } else {
                res.redirect(redirectPath);
            }
        };
    },
    checkControl: (role, redirectPath) => (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === role) {
      return next();
    }
    req.flash('error', 'You do not have access to the page.');
    return res.redirect(redirectPath);
  },
};