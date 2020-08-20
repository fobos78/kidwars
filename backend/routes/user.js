import express from 'express';
import { userModel } from '../database/database.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await userModel.find();
  users.sort((a, b) => b.score - a.score).slice(0, 4);
  res.json(users);
});

router.post('/', async (req, res) => {
  const { user } = req.body;
  const needUser = await userModel.findOne({ email: user });
  res.json(needUser);
});

export default router;
