import mongoose from 'mongoose';

const DaySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'A Day must have a date'],
    unique: [true, 'A Day must have a unique date'],
  },
  images: {
    type: [
      {
        type: mongoose.isObjectIdOrHexString,
        ref: 'Picture',
      },
    ],
    required: [true, 'A Day must have a set of pictures'],
    unique: [true, 'A Day must have a unique set of pictures'],
  },
});

export const Day = mongoose.model('Day', DaySchema);
