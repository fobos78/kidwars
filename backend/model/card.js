import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// const cardSchema = new Schema({
//   theme: String,
//   points: Number,
//   question: String,
//   answer1: String,
//   answer2: String,
//   answer3: String,
//   answerTrue: String,
//   classNumber: Number,
// });

const cardSchema = new Schema({
  theme: String,
  classNumber: Number,
  fourth: Number,
  question: String,
  answerOptions: [String],
  answerTrue: String,
  creator: String,
});

export default model('Card', cardSchema);
