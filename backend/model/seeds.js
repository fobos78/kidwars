/* eslint-disable import/extensions */
/* eslint-disable no-await-in-loop */
import mongoose from 'mongoose';
import fs from 'fs';
// import Card from './card.js';
import { taskModel } from '../database/database.js';

mongoose.connect('mongodb://localhost:27017/cards', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

async function seed() {
  const cards = fs.readFileSync('./data/cards.txt', 'utf-8');
  const cardsArray = cards.split('\n');
  cardsArray.pop();

  // 225 cards Математика
  // 162 cards2 Окружающий мир
  // не забудка изменить название файла на 14 строке
  for (let i = 0; i < 225; i += 9) {
    const theme = cardsArray[i];
    const classNumber = cardsArray[i + 1];
    const fourth = cardsArray[i + 2];
    const question = cardsArray[i + 3];
    const answerOptions = [
      cardsArray[i + 4],
      cardsArray[i + 5],
      cardsArray[i + 6],
      cardsArray[i + 7],
    ];
    const answerTrue = cardsArray[i + 8];
    await new taskModel ({
      theme, classNumber, fourth, question, answerOptions, answerTrue,
    }).save();
  }
}

seed();
// for (let i = 0; i < 63; i += 7) {
//   const theme = cardsArray[i];
//   const points = cardsArray[i + 1];
//   const question = cardsArray[i + 2];
//   const answer1 = cardsArray[i + 3];
//   const answer2 = cardsArray[i + 4];
//   const answer3 = cardsArray[i + 5];
//   const answerTrue = cardsArray[i + 6];
//   const classNumber = cardsArray[i + 7];
//   await new Card({
//     theme, points, question, answer1, answer2, answer3, answerTrue, classNumber,
//   }).save();
// }
