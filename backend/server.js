import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import fS from 'session-file-store';

import indexRouter from './routes/index.js';
import loginRouter from './routes/login.js';
import singInRouter from './routes/singin.js';
import tasksRouter from './routes/tasks.js';
import editRouter from './routes/edit.js';

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
app.use('/login', loginRouter);
app.use('/sing_in', singInRouter);
app.use('/tasks', tasksRouter);
app.use('/edit', editRouter);

app.listen(process.env.PORT ?? 3001);
