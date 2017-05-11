const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const offerSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  title: String,
  family: { type: Schema.Types.ObjectId, ref: 'jobFamily' },
  description: String,
  country: String,
  city: String,
  status: String
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Offer = mongoose.model("Offer", offerSchema);
module.exports = Offer;