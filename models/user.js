const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  password: String,
  age: Number,
  mail: String,
  gender: Number,
  offers: [{ type: Schema.Types.ObjectId, ref: 'offer' }],
   role: {
    type: String,
    enum: ['ADMIN', 'HR', 'USER'],
    default: 'USER',
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
//   expertiseFamilies: [{ type: Schema.Types.ObjectId, ref: 'jobFamilies' }]
const User =  mongoose.model('User', userSchema);
module.exports = User;