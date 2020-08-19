import express from 'express';
import { taskModel, userModel } from '../database/database.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { user } = req.body;
  const { kidName, needScore, taskConfig } = await userModel.findOne({ email: user });
  console.log(taskConfig);
  let tasks = await taskModel.find({ theme: taskConfig.theme, classNumber: taskConfig.classNumber, fourth: taskConfig.fourth });
  if (tasks === undefined) { tasks = []; }
  console.log(tasks);
  res.json({ kidName, needScore, tasks });
});

export default router;
