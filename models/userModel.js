<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  ID:Schema.Types.ObjectId,
=======
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  user_id:Schema.Types.ObjectId,
>>>>>>> 9b3ad9c19cbd01cc436d8a907339895de97c9e51
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
<<<<<<< HEAD
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
<<<<<<< HEAD
module.exports = mongoose.model('TravelRoute', TravelRouteSchema );
=======
module.exports = mongoose.model('TravelRoute', TravelRouteSchema );
>>>>>>> e53751df72fbea0b11935baf827a67b6a2e4792c
=======
});

export const TravelRouteSchema = new Schema({
  route_id:Schema.Types.ObjectId,
  AttractionList: [String],
  Restaurant: [String],
});
>>>>>>> 9b3ad9c19cbd01cc436d8a907339895de97c9e51
