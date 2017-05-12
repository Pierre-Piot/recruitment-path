
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
    title: 'Software engineer — Health, Usage and Behavior data science team',
    description: 'You will work as an integral part of our data science team to develop and implement algorithms and systems that can be applied at scale to Danone data. Examples of the kind of work you might do include developing and running time-series models on user log data, large-scale graph and matrix factorization, and building APIs to interface with other parts of the Danone stack. To do all this, you’ll work with both engineers and data scientists on the team and elsewhere at Danone.',
    country: 'Spain',
    city: 'Madrid',
    status: true,
    family: "5914edfb38e6b004c6a2b45b"
  },
  {
    title: 'Security Engineer - Enterprise Security',
    description: 'In this role you will develop technical solutions to help mitigate security vulnerabilities and architectural weaknesses, to improve the security posture of client endpoints and servers, and to improve security incident detection and response capabilities. Other responsibilities of this role include automating and streamlining existing processes and procedures. This role will involve both the development of tools and consulting with product and infrastructure teams to improve our defensive posture.',
    country: 'Spain',
    city: 'Barcelona',
    status: true,
    family: "5914edfb38e6b004c6a2b45b"
  },
  {
    title: 'Global Head of Social Strategy',
    description: 'We are seeking a skilled wordsmith and gracious leader to shape our social strategy and marketing messaging of the 140 character kind. Guide and welcome our global community from their first tweet onward. You’ll be responsible for strategizing how we tell our story in the social sphere and will help ensure our community is up to date on the latest product features and functionality, while highlighting those “Only on Twitter” moments.  From sports to science, politics to pop-culture, the Head of Social Strategy will work with a team of community managers, producers, designers, and creators to determine how and when we join the conversation. This person will also be responsible for identifying and activating leaders, influencers, and passionate communities with shared interests. We are looking for someone who appreciates the value of punchy language and bold brevity, but knows how to navigate a tweetstorm. This role is a nuanced and powerful opportunity to help drive and amplify the voice of Danone and more importantly, the voices of our users.',
    country: 'France',
    city: 'Saint Malo',
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