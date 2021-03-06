const express = require('express');
const privateRoutes = express.Router();
// Require Helper
const auth = require('../helper/auth');
const ensureLogin     = require("connect-ensure-login");

// Model
const JobFamily       = require('../models/jobFamily');
const Offer           = require('../models/offer');
const User            = require('../models/user');

// const ensureLogin     = require("connect-ensure-login");
// const passport        = require('passport');

//, auth.checkControl('HR','/')
//show details of each celebrity in individual pages (not working)

privateRoutes.get('/private',ensureLogin.ensureLoggedIn('/login'),  (req, res, next) => {


res.render("passport/profile");
 
//   Offer.find({family:req.params.id}, (err, offers) => {
//     if (err) { next(err)
//              } else { res.render('jobFamily/showOffers', {offers: offers})
//                    }
//       })
  });

privateRoutes.post('/private/applyJob', ensureLogin.ensureLoggedIn('/login'), (req, res, next) => {
  
  User.find({ _id: req.user._id, offers: req.body.idOffer }, (err, userU) => {
    console.log("this is userU",userU.length);
    if (userU.length !== 0){
      console.log("Already applied");
      res.render('passport/profile',{ message: req.flash("Aplication Succefull") });  
      return;    
    }
    console.log("New Apply");
    User.update({ _id: req.user._id }, { $push: { offers: req.body.idOffer }}, (err) => {
         if (err) { next(err);
              } else { res.render('passport/profile', { message: req.flash("Aplication Succefull") })} 
    });

  });
});



module.exports = privateRoutes;
