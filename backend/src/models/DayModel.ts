import mongoose from 'mongoose';

const DaySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'A Day must have a date'],
    unique: [true, 'A Day must have a unique date'],
    images: {
      type: [
        {
          type: mongoose.isObjectIdOrHexString,
          ref: 'Picture',
        },
      ],
    },
  },
});

export const Day = mongoose.model('Day', DaySchema);
