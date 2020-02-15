const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  ID:Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: 'Enter a first name'
  },
  lastName: {
    type: String,
    required: 'Enter a last name'
  },
  email: String,
  phone: Number,
  location: String,
  UserTagList: {type = [String]}, 
  InputTagList: {type = [String]}, 
  TravelRecordList: {type = [String]}, 
});

const TravelRouteSchema = new Schema({
  UserID: {type=String, ref = 'User'},
  RouteID:Schema.Types.ObjectId,
  AttractionList: {type: String,},
  Restaurant: {type: String},
});


module.exports = mongoose.model('User', User );
module.exports = mongoose.model('TravelRoute', TravelRouteSchema );
