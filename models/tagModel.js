const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserTagSchema = new Schema({
  userTagName: String,
  description: String,
  type: String,
});

const InputTagSchema = new Schema({
  userTagName: String,
  description: String,
  type: String,
});
module.exports = mongoose.model('UserTag',InputTagSchema);
module.exports = mongoose.model('InputTag',InputTagSchema);



