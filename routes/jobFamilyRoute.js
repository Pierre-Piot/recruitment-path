const express = require('express');
const router = express.Router();
// Model
const JobFamily       = require('../models/jobFamily');
const Offer           = require('../models/offer');
// Bcrypt to encrypt passwords
const bcrypt          = require("bcrypt");
const bcryptSalt      = 10;
const ensureLogin     = require("connect-ensure-login");
const passport        = require('passport');


//show details of each celebrity in individual pages (not working)
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, jobFamily) => {
    if (err) {
      next(err)
    } else {
      res.render('jobFamily/show', {jobFamilies: jobFamilies})
    }
  })
})


// /* GET home page. */
// router.get('/', function(req, res, next) {
// //  res.render('index', { title: 'Express' });

// JobFamily.find({}, (err, jobFamilies) => {
//     if (err) {
//       next(err)
//     } else {
//       res.render('index', {title:'Express' , jobFamilies: jobFamilies});
//     }
//   })

// });

module.exports = router;


