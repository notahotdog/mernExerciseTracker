const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, //trim whitespace off the end
    minlength: 3 //min 3 char long
  },
}, {
  timestamps: true, //timestamps for when something is created/modified
});

const User = mongoose.model('User', userSchema);

module.exports = User;