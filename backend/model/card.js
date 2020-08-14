import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const cardSchema = new Schema({
  theme: String,
  points: Number,
  question: String,
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
});

export default  model('Card', cardSchema);
