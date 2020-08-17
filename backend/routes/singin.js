import express from 'express';
import bcrypt from 'bcrypt';
import { userModel } from '../database/database.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('go away!!');
});

router.post('/', async (req, res) => {
  const {
    email,
    kidName,
    kidClass,
    password,
  } = req.body;
  try {
    const newUser = await new userModel({
      email,
      kidName,
      kidClass,
      password: await bcrypt.hash(password, 10),
      score: 0,
      needScore: 10,
      access: false,
    });
    await newUser.save();
    req.session.user = newUser;
    // res.locals.user = req.session.user;
    const message = 'success';
    const user = { email: newUser.email, score: newUser.score, access: newUser.access };
    res.json({ message, user });
  } catch {
    const message = 'такой пользователь уже существует';
    res.json({ message });
  }
});

export default router;
