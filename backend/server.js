import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import fS from 'session-file-store';
import TelegramBot from 'node-telegram-bot-api';
import fetch from 'node-fetch';

import indexRouter from './routes/index.js';
import loginRouter from './routes/login.js';
import logoutRouter from './routes/logout.js';
import singInRouter from './routes/singin.js';
import taskRouter from './routes/tasks.js';
import newTaskRouter from './routes/task.js';
import gameRouter from './routes/game.js';
import editRouter from './routes/edit.js';
import doneRouter from './routes/done.js';
import configRouter from './routes/config.js';
import addScoreRouter from './routes/addscore.js';
import userRouter from './routes/user.js';

dotenv.config();
const fileStore = fS(session);

const app = express();

mongoose.connect('mongodb://localhost:27017/cards', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    store: new fileStore(),
    key: 'user_sid',
    secret: 'something',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 1000 * 60 * 60 * 24 * 365,
    },
  }),
);

app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/singin', singInRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/tasks', taskRouter);
app.use('/api/task', newTaskRouter);
app.use('/api/game', gameRouter);
app.use('/api/done', doneRouter);
app.use('/edit', editRouter);
app.use('/config', configRouter);
app.use('/api/addscore', addScoreRouter);
app.use('/api/user', userRouter);

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(process.env.PORT ?? 3001);

// Подключаем библиотеку для работы с Telegram API в переменную

// Устанавливаем токен, который выдавал нам бот
const token = '1112279415:AAGobWm61FyW2HoU5NQrKE2LkwZH_R8x6vo';

const bot = new TelegramBot(token, { polling: true });

const sait = 'https://random.dog/woof.json';
const test = 'http://localhost:3001';
// const sait = 'https://www.cbr-xml-daily.ru/daily_json.js';

async function dog(sait) {
  try {
    const response = await fetch(sait);
    const { url } = await response.json();
    return url;
  } catch (error) {
    console.log(error);
  }
}
async function messageTest(sait) {
  try {
    const response = await fetch(sait);
    const test = await response.json();
    return test;
  } catch (error) {
    console.log(error);
  }
}

// Простая команда без параметров
bot.on('message', async (msg) => {
  const chatId = msg.chat.id; // Берем ID чата (не отправителя)
  // Фотография может быть: путь к файлу, поток (stream) или параметр file_id
  const photo = await dog(sait); // в папке с ботом должен быть файл "cats.png"
  const testOk = await messageTest(`${test}/${msg.text}`); // в папке с ботом должен быть файл "cats.png"

  if (msg.text === testOk.email) {
    if (testOk.access.flag) {
      bot.sendMessage(chatId,
        `Доступ открыт\n
        Имя ребенка: ${testOk.kidName}\n
        Выбранная тема: ${testOk.taskConfig.theme[0]}\n
        Класс: ${testOk.taskConfig.classNumber}\n
        Четверть: ${testOk.taskConfig.fourth}\n
        Общее количесво очков: ${testOk.score}\n
        Количество заданий в день: ${testOk.needScore}\n
      `);
      console.log(testOk);
    } else {
      bot.sendMessage(chatId, 'Доступ - закрыт');
    }
    // bot.sendMessage(chatId,
    //   `Информация:\n
    //   Имя ребенка: ${testOk.kidName}\n
    //   Выбранная тема: ${testOk.taskConfig.theme[0]}\n
    //   Класс: ${testOk.taskConfig.classNumber}\n
    //   Четверть: ${testOk.taskConfig.fourth}\n
    //   Общее количесво очков: ${testOk.score}\n
    //   Количество заданий в день: ${testOk.needScore}\n
    // `);
  } else {
    bot.sendPhoto(chatId, photo, { caption: 'Собачка' });
  }
});

// {
//   taskConfig: { theme: [ 'Литература' ], classNumber: 1, fourth: 1 },
//   _id: '5f3b72744d386314eea83bc2',
//   email: 'cool.hygf@mail.ru',
//   name: 'Виталик',
//   surname: 'Петров',
//   kidName: 'Степан',
//   password: '$2b$10$RSnXkDQbKToS.ZEHdihjruKExUFejd/Z4oo3a2YcxktVlxvzqSkyC',
//   score: 1,
//   needScore: 1,
//   access: { flag: true, date: '19.08.2020' },
//   __v: 0
// }
