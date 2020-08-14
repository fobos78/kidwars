import express from 'express';
import Card from '../model/card.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const findTasks = await Card.find();
  res.json(findTasks);
});

export default router;
