const mongoose = require('mongoose');
const { Schema } = mongoose;

userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
