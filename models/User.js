const mongoose = require('mongoose');

//const workoutSchema = new mongoose.Schema({})

const UserSchema = new mongoose.Schema({
  provider: {
    type: String,
    required: true,
  },
  providerId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  workouts: {
    type: [[{}]],
    required: false
}
},  {
  timestamps: true    
});

module.exports = mongoose.model('User', UserSchema);
