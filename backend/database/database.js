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
  taskConfig: [Object],
  needScore: Number,
  score: Number,
  access: Boolean,
});

const taskSchema = new mongoose.Schema({
  theme: String,
  classNumber: Number,
  points: Number,
  question: String,
  answerOptions: [String],
  answerTrue: String,
  creator: String,
});

const userModel = mongoose.model('users', userSchema);
const taskModel = mongoose.model('newTasks', taskSchema);

export { userModel, taskModel };
