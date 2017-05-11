const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  avatar: String,
  role:  {
          type: String,
          enum: ['ADMIN', 'HR', 'USER'],
          default: 'USER',
          },
  firstName: String,
  lastName: String,
  city: String,
  password: String,
  age: Date,
  mail: String,
  phone: Number,
  gender: Number, 
  offers: [{ type: Schema.Types.ObjectId, ref: 'offer' }],
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
//   expertiseFamilies: [{ type: Schema.Types.ObjectId, ref: 'jobFamilies' }]
const User =  mongoose.model('User', userSchema);
module.exports = User;