import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import fS from 'session-file-store';

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
