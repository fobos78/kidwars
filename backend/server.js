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

const host = 'http://localhost:3001';

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
  const testOk = await messageTest(`${host}/${msg.text}`); // в папке с ботом должен быть файл "cats.png"

  if (msg.text === testOk.email) {
    if (testOk.access.date === new Date().toLocaleDateString() && testOk.access.flag === true) {
      bot.sendMessage(chatId,
        `Доступ открыт\n
        Имя ребенка: ${testOk.kidName}\n
        Выбранная тема: ${testOk.taskConfig.theme[0]}\n
        Общее количесво очков: ${testOk.score}\n
        Количество заданий в день: ${testOk.needScore}\n
      `);
    }
    if (testOk.access.date === new Date().toLocaleDateString() && testOk.access.flag === false) {
      bot.sendMessage(chatId, 'Тесты еще не пройдены');
    }
    if (testOk.access.date !== new Date().toLocaleDateString()) {
      bot.sendMessage(chatId, 'Доступ закрыт');
    }
  }
});
