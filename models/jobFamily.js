const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const jobFamilySchema = new Schema({
  pic: {
          name: String,
          pic_path: String,
          pic_name: String
          },
  name  : String,
  path : String,
  offers : [{ type: Schema.Types.ObjectId, ref: 'Offer' }]
});

module.exports = mongoose.model("JobFamily", jobFamilySchema);
