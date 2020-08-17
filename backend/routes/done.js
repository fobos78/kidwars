import express from 'express';
import { userModel } from '../database/database.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { user } = req.body;
  await userModel.findOneAndUpdate({ email: user }, { $set: { access: { flag: true, date: new Date().toLocaleDateString() } } });
  const message = 'success';
  res.json(message);
});

export default router;
