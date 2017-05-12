const express           = require('express');
const path              = require('path');
const favicon           = require('serve-favicon');
const logger            = require('morgan');
const cookieParser      = require('cookie-parser');
const bodyParser        = require('body-parser');
const session           = require('express-session');
const flash             = require('connect-flash');
const mongoose          = require('mongoose');
const auth              = require('./helper/auth');
const expressLayouts    = require('express-ejs-layouts');

// Require routes
const index             = require('./routes/index');
const user              = require('./routes/user');
const privateRoute      = require('./routes/privateRoute');
const passportRoute     = require('./routes/passportRoute');
const jobFamilyRoute    = require('./routes/jobFamilyRoute');

// Require helper files
mongoose.connect('mongodb://localhost/recruitmentdb');
const passport = require('./helper/passport');
mongoose.Promise = require('bluebird');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

// set layouts for views
app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', 'layouts/main-layout');
app.set('views', __dirname + '/views');

//enable sessions here
app.use(session({
  secret: "my-strategy",
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 600000 },
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// adding our own middleware so all pages can access currentUser
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/', index);
app.use('/user', user);
app.use('/', passportRoute);
app.use('/', jobFamilyRoute);
app.use('/', privateRoute);
//app.use('/', privateRoute);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;