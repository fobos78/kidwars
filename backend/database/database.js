import mongoose from 'mongoose';

// const address = 'mongodb://localhost:27017/KWusers';

// mongoose.connect(address,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//   });

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  kidName: { type: String, required: true },
  kidClass: { type: Number },
  password: { type: String, required: true },
  score: Number,
  access: Boolean,
});

const userModel = mongoose.model('users', userSchema);

export default userModel;
