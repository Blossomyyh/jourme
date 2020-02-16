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
<<<<<<< HEAD
module.exports = mongoose.model('UserTag',UserTagSchema);
module.exports = mongoose.model('InputTag',InputTagSchema);
=======
module.exports = mongoose.model('UserTag',InputTagSchema);
module.exports = mongoose.model('InputTag',InputTagSchema);



>>>>>>> e53751df72fbea0b11935baf827a67b6a2e4792c
