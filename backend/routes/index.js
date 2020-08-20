import express from 'express';
import { userModel } from '../database/database.js';

const router = express.Router();

router.get('/:email', async (req, res) => {
  const { email } = req.params;
  const newUser = await userModel.findOne({ email });
  res.json(newUser);
});

export default router;
