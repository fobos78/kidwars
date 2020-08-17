import express from 'express';
import bcrypt from 'bcrypt';
import { userModel } from '../database/database.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    email,
    password,
  } = req.body;
  const newUser = await userModel.findOne({ email });

  if (newUser && await bcrypt.compare(password, newUser.password)) {
    req.session.user = newUser;
    const message = 'success';
    const user = { email: newUser.email, score: newUser.score, access: newUser.access };
    res.json({ message, user });
  } else {
    const message = 'Неверный логин или пароль';
    res.json({ message });
  }
});

export default router;
