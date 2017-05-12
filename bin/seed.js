
// const jobFamilySchema = new Schema({
//   name  : String,
//   offers : [{ type: Schema.Types.ObjectId, ref: 'Offer' }]
// });

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
//    mongoose.connection.close();
//  });

const mongoose = require('mongoose');

const Offer = require('../models/offer');
mongoose.connect('mongodb://localhost/recruitmentdb');


const offers = [
  {
    title: 'Global Pepito',
    description: 'We are seeking a pepito.',
    country: 'France',
    city: 'Paris',
    status: true,
    family: "5914edfb38e6b004c6a2b457"
  }
];

Offer.create(offers, (err, docs) => {
  if(err) {throw err}
  docs.forEach((offer) => {
    console.log(offer.title);
  });
  mongoose.connection.close();
});