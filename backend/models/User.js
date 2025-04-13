const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['jobseeker', 'employer', 'admin'],
      default: 'jobseeker',
    },
  },
  { timestamps: true }
);

// Export the model
module.exports = mongoose.model('User', userSchema);
