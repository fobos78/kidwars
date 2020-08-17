/* eslint-disable import/extensions */
import express from 'express';
import mongoose from 'mongoose';
import { userModel } from '../database/database.js';

const router = express.Router();

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
