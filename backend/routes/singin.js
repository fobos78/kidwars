import express from 'express';
import bcrypt from 'bcrypt';
import userModel from '../database/database.js';

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
    });
    await newUser.save();
    req.session.user = newUser;
    // res.locals.user = req.session.user;
    const message = 'success';
    const userEmail = newUser.email;
    res.json({ message, userEmail });
  } catch {
    const message = 'такой пользователь уже существует';
    res.json({ message });
  }
});

export default router;