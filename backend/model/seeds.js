import mongoose from 'mongoose';
import fs from 'fs';
import Card from './card.js';

mongoose.connect('mongodb://localhost:27017/cards', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

async function seed() {
  // загружаем вопросы из файла и создаем коллекцию Cards:

  const cards = fs.readFileSync('./data/cards.txt', 'utf-8');
  let cardsArray = cards.split('\n');
  cardsArray.pop();

  for (let i = 0; i < 21; i += 7) {
    const theme = cardsArray[i];
    const points = cardsArray[i + 1];
    const question = cardsArray[i + 2];
    const answer1 = cardsArray[i + 3];
    const answer2 = cardsArray[i + 4];
    const answer3 = cardsArray[i + 5];
    const answerTrue = cardsArray[i + 6];
    await new Card({ theme, points, question, answer1, answer2, answer3, answerTrue }).save();
  }
  // mongoose.disconnect();
}

seed();
