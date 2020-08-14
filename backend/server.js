import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import fS from 'session-file-store';
import TelegramBot from 'node-telegram-bot-api';
import fetch from 'node-fetch';

import indexRouter from './routes/index.js';
import loginRouter from './routes/login.js';
import logoutRouter from './routes/logout.js';
import singInRouter from './routes/singin.js';
import taskRouter from './routes/task.js';
import editRouter from './routes/edit.js';

dotenv.config();
const fileStore = fS(session);

const app = express();

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
app.use('/task', taskRouter);
app.use('/edit', editRouter);

app.listen(process.env.PORT ?? 3001);



// Подключаем библиотеку для работы с Telegram API в переменную

// Устанавливаем токен, который выдавал нам бот
var token = '1112279415:AAGobWm61FyW2HoU5NQrKE2LkwZH_R8x6vo';
// Включить опрос сервера. Бот должен обращаться к серверу Telegram, чтобы получать актуальную информацию
// Подробнее: https://core.telegram.org/bots/api#getupdates
var bot = new TelegramBot(token, { polling: true });

const sait = 'https://random.dog/woof.json';
const test = 'http://localhost:3001/';
//const sait = 'https://www.cbr-xml-daily.ru/daily_json.js';

async function dog(sait) {
  try {
    const response = await fetch(sait);
    const { url } = await response.json();
    console.log(response);
    return url;
  }
  catch (error) {
    console.log(error);
  }
}
async function messageTest(sait) {
  try {
    const response = await fetch(sait);
    const { test } = await response.json();
    console.log(response);
    return test;
  }
  catch (error) {
    console.log(error);
  }
}

// Простая команда без параметров
bot.on('message', async function (msg) {
  console.log(msg.text);
  var chatId = msg.chat.id; // Берем ID чата (не отправителя)
  // Фотография может быть: путь к файлу, поток (stream) или параметр file_id
  var photo = await dog(sait); // в папке с ботом должен быть файл "cats.png"
  var testOk = await messageTest(test); // в папке с ботом должен быть файл "cats.png"
  console.log(photo);
 
  if(msg.text === 'как дела'){
    bot.sendMessage(chatId, testOk);
  } else {
    bot.sendPhoto(chatId, photo, { caption: 'Собачка' });
  }
});
