import express from 'express';
import { userModel } from '../database/database.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { user } = req.body;
  const needUser = await userModel.findOne({ email: user });
  needUser.score += 1;
  await needUser.save();
  res.json(needUser.score);
});

export default router;
