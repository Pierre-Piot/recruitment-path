
// // const jobFamilySchema = new Schema({
// //   name  : String,
// //   offers : [{ type: Schema.Types.ObjectId, ref: 'Offer' }]
// // });

// const mongoose = require('mongoose');
// const JobFamily = require('../models/jobFamily');


// mongoose.connect('mongodb://localhost/recruitmentdb');


// const jobFamilies = [
//   {
//     name: 'Purchasing',
//     path: 'purchasing.png',
//   },
//   {
//     name: 'Commercial',
//     path: 'commercial.png',
//   },
//   {
//     name: 'Communication',
//     path: 'communication.png',
//   },
//   {
//     name: 'Finance',
//     path: 'finance.png',
//   },
//   {
//     name: 'Industrial & Supply Chain',
//     path: 'industrialSupplyChain.png',
//   },
//   {
//     name: 'Legal & Regulatory',
//     path: 'legalRegulatory.png',
//   },
//   {
//     name: 'Marketing',
//     path: 'marketing.png',
//   },
//   {
//     name: 'Quality',
//     path: 'quality.png',
//   },
//   {
//     name: 'Research & Innovation',
//     path: 'researchInnovation.png',
//   },
//   {
//     name: 'Human Ressources',
//     path: 'humanRessources.png',
//   },
//   {
//     name: 'Information System',
//     path: 'informationSystem.png',
//   }
// ];

// JobFamily.create(jobFamilies, (err, docs) => {

//   if(err) {throw err}
//   docs.forEach((jobFamily) => {
//     console.log(jobFamily.name);
//   });

const mongoose = require('mongoose');

const Offer = require('../models/offer');
mongoose.connect('mongodb://localhost/recruitmentdb');


const offers = [
  {
    title: 'Web Designer',
    description: 'Web designer with 4 years of experience',
    country: 'Spain',
    city: 'Madrid',
    status: true,
    family: "5912e587b76ee2c332b5b877"
  },
  {
    title: 'IT Manager',
    description: 'Experience working with scrum',
    country: 'Spain',
    city: 'Barcelona',
    status: true,
    family: "5912e587b76ee2c332b5b877"
  },
  {
    title: 'Marketing Online',
    description: 'Experience in SEO, SEM',
    country: 'France',
    city: 'Saint Malo',
    status: true,
    family: "5912e587b76ee2c332b5b873"
  }
];

Offer.create(offers, (err, docs) => {
  if(err) {throw err}
  docs.forEach((offer) => {
    console.log(offer.title);
  });
  mongoose.connection.close();
});