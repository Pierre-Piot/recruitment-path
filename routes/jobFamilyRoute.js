const express = require('express');
const jobFamilyRoutes = express.Router();
// Require Helper
const auth = require('../helper/auth');

// Model
const JobFamily       = require('../models/jobFamily');
const Offer           = require('../models/offer');

// const ensureLogin     = require("connect-ensure-login");
// const passport        = require('passport');

//show list of job Opportunities from a familyJob
jobFamilyRoutes.get('/jobFamily/:id', (req, res, next) => {
  
  Offer.find({family:req.params.id}, (err, offers) => {
    if (err) { next(err)
             } else { 
               JobFamily.findById(req.params.id, (err, familyJob) =>{
                  if (err) { next(err)
                } else {
                 res.render('jobFamily/showOffers', {offers: offers , family: familyJob })
                }
               });
              }
      });
  });

//show description of the full job
jobFamilyRoutes.get('/offer/:id', (req, res, next) => {
  
  Offer.findById(req.params.id, (err, offer) => {
    if (err) { next(err)
             } else { res.render('offer/showOffer', {offer: offer})
                   }
      })
  });


module.exports = jobFamilyRoutes;


