const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const JobFamilySchema = new Schema({
  name  : String,
  offers : [{ type: Schema.Types.ObjectId, ref: 'Offer' }]
});

const JobFamily = mongoose.model("JobFamily", JobFamilySchema);
module.exports = JobFamily;