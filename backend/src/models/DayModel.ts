import { timeStamp } from 'console';
import mongoose from 'mongoose';

const DaySchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: [true, 'A Day must have a date'],
      unique: [true, 'A Day must have a unique date'],
    },
    images: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Picture',
        },
      ],
      required: [true, 'A Day must have a set of pictures'],
      unique: [true, 'A Day must have a unique set of pictures'],
    },
    is_editable: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Day = mongoose.model('Day', DaySchema);
