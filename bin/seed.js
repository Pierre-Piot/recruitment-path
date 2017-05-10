
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
//   mongoose.connection.close();
// });


const mongoose = require('mongoose');

const Offer = require('../models/offer');
mongoose.connect('mongodb://localhost/recruitmentdb');


const offers = [
  {
    family     : '5912e588dfc016222ef99d5c',
    title   : 'Responsable of Communication',
    city    : 'San Francisco',
    country : 'USA',
    status  : 1,

  },
  {
    family     : '5912e588dfc016222ef99d5d',
    title   : 'Financial Controler',
    city    : 'Madrid',
    country : 'Spain',
    status  : 1,
},
{
    family     : '5912e588dfc016222ef99d63',
    title   : 'Head of Recruitment Strategy',
    city    : 'Mexico CF',
    country : 'Mexico',
    status  : 1,
},
{
    family     : '5912e588dfc016222ef99d64',
    title   : 'Developper Full-Stack',
    city    : 'London',
    country : 'United Kingdom',
    status  : 1,
}
];

Offer.create(offers, (err, docs) => {
  if(err) {throw err}
  docs.forEach((offer) => {
    console.log(offer.title);
  });
  mongoose.connection.close();
});