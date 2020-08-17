/* eslint-disable import/extensions */
import express from 'express';
import mongoose from 'mongoose';
import { userModel } from '../database/database.js';

const router = express.Router();

router.get('/:email', async (req, res) => {
  const { email } = req.params;
  const userInfo = await userModel.findOne({ email });
  res.json({
    userName: userInfo.name,
    kidName: userInfo.kidName,
    classNumber: userInfo.taskConfig.classNumber,
    fourth: userInfo.taskConfig.fourth,
    theme: userInfo.taskConfig.theme,
    needScore: userInfo.needScore,
    score: userInfo.score,
  });
});

router.post('/', async (req, res) => {
  const { config, userEmail, needScore } = req.body;
  try {
    const userBD = await userModel.findOne({ email: userEmail });
    userBD.taskConfig = config;
    userBD.needScore = needScore;
    await userBD.save();
    res.json(userBD);
  } catch (error) {
    res.send(error);
  }
});

export default router;

// console.log("Confi: ", config, "User из Базы:", userBD, "userEmail", userEmail);
