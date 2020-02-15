import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  user_id:Schema.Types.ObjectId,
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
});

export const TravelRouteSchema = new Schema({
  route_id:Schema.Types.ObjectId,
  AttractionList: [String],
  Restaurant: [String],
});