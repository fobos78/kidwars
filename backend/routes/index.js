import express from 'express';

const router = express.Router();

app.get('/api', (req, res) => {
  res.json({ test: 'OK' });
});

export default router;
