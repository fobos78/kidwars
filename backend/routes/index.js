import express from 'express';

const router = express.Router();

app.get('/', (req, res) => {
  res.json({ test: 'OK' });
});

export default router;
