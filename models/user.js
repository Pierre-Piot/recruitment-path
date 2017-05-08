const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  avatar: {
          name: String,
          pic_path: String,
          pic_name: String
          },
  role:  {
          type: String,
          enum: ['ADMIN', 'HR', 'USER'],
          default: 'USER',
          },
  name: String,
  lastName: String,
  city: String,
  password: String,
  age: Number,
  mail: String,
  gender: Number, 
  offers: [{ type: Schema.Types.ObjectId, ref: 'offer' }],
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
//   expertiseFamilies: [{ type: Schema.Types.ObjectId, ref: 'jobFamilies' }]
const User =  mongoose.model('User', userSchema);
module.exports = User;