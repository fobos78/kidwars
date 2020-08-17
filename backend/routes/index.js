import express from 'express';
import { userModel } from '../database/database.js';

const router = express.Router();

router.get('/:email', async (req, res) => {
  console.log(">>>>>>>>>>>>>", req.params.email);
  const { email } =  req.params;
  const newUser = await userModel.findOne({ email });

  console.log(newUser);
  res.json(newUser);
});

export default router;
