const express = require('express');
const router = express.Router();
// Models
const User            = require("../models/user");
const JobFamily       = require('../models/jobFamily');
// Bcrypt to encrypt passwords
const bcrypt          = require("bcrypt");
const bcryptSalt      = 10;
const ensureLogin     = require("connect-ensure-login");
const passport        = require('passport');



/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });


JobFamily.find({}, (err, jobFamilies) => {
    if (err) {
      next(err)
    } else {
      res.render('index', {title:'Express' , jobFamilies: jobFamilies});
    }
  })

});

module.exports = router;


