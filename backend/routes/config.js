/* eslint-disable import/extensions */
import express from 'express';
import bcrypt from 'bcrypt';
import { userModel } from '../database/database.js';

const router = express.Router();

router.post('/access', async (req, res) => {
  const { userEmail, password } = req.body;
  try {
    const passwordFind = await userModel.findOne({ email: userEmail });
    if (passwordFind && await bcrypt.compare(password, passwordFind.password)) {
      res.json({ password: true });
    } else {
      res.json({ password: false });
    }
  } catch (error) {
    res.send(error);
  }
});

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
