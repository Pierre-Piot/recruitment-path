const express = require('express');

const jobFamilyRoutes = express.Router();
// Require Helper
const auth = require('../helper/auth');

// Model
const JobFamily = require('../models/jobFamily');
const Offer = require('../models/offer');
const User = require('../models/user');

// const ensureLogin     = require("connect-ensure-login");
// const passport        = require('passport');

// show list of job Opportunities from a familyJob
jobFamilyRoutes.get('/jobFamily/:id', (req, res, next) => {
  Offer.find({
    family: req.params.id,
  }, (err, offers) => {
    if (err) {
      next(err);
    } else {
      JobFamily.findById(req.params.id, (err, familyJob) => {
        if (err) {
          next(err);
        } else {
          res.render('jobFamily/showOffers', {
            offers,
            family: familyJob,
          });
        }
      });
    }
  });
});

// show description of the full job
jobFamilyRoutes.get('/offer/:id', (req, res, next) => {
  Offer.findById(req.params.id, (err, offer) => {
    if (err) {
      next(err);
    } else {
      res.render('offer/showOffer', {
        offer,
      });
    }
  });
});


jobFamilyRoutes.get('/hroffer/:id', auth.checkControl('HR', '/'), (req, res, next) => {
  User.find({ offers: { $in: [req.params.id] } }, { lastName: 1, firstName: 1 }, (err, users) => {
    if (err) {
      next(err);
    } else {
      Offer.findById(req.params.id, (err, offerJ) => {
        if (err) {
          next(err);
        } else {
          console.log('esteeeeeee', users);
          //console.log('esteeeeeee', offerJ);
          res.render('private/candidates', { users, offer: offerJ });
        }
      });
    }
  });
});



jobFamilyRoutes.get('/hrdashboard', auth.checkControl('HR', '/'), (req, res, next) => {
  Offer
    .find({}, (err, offers) => {
      if (err) throw err;
      res.render('private/dashboard', {
        offers,
      });
    });
  // Offer
  //   .find({})
  //   .populate('family')
  //   .exec((err, offers) => {
  //     if (err) throw err;
  //     res.render('private/dashboard', {
  //       offers,
  //     });
  //   });
});

module.exports = jobFamilyRoutes;
