import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserTagSchema = new Schema({
  userTagName: String,
  description: String,
});

export const InputTagSchema = new Schema({
  userTagName: String,
  description: String,
});

