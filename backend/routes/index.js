import express from 'express';

const router = express.Router();

<<<<<<< HEAD
// app.get('/', (req, res) => {
//   res.json({ test: 'OK' });
// });
=======
router.get('/', (req, res) => {
  res.json({ test: 'OK' });
});
>>>>>>> 24195817b43ff0b22fee6da33100b5be7fa9d2a7

export default router;
