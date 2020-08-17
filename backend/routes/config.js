import express from 'express';
import mongoose from 'mongoose';
import UserModel from '../database/database.js';


const router = express.Router();

router.post('/',async(req, res) => {
  const { config } = req.body;
  try {
    const user = await UserModel.findOne()
  }

});

export default router;
