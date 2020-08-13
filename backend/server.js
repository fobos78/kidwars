import express from 'express';

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ test: 'OK' });
});

app.listen(process.env.PORT ?? 3001);
