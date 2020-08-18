import express from 'express';
import { taskModel, userModel } from '../database/database.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { user } = req.body;
  const { kidName, needScore, taskConfig } = await userModel.findOne({ email: user });
  const tasks = await taskModel.find({ theme: taskConfig.theme });

  res.json({ kidName, needScore, tasks });
});

export default router;
