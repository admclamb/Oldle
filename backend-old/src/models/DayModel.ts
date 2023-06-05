import { timeStamp } from "console";
import mongoose from "mongoose";

const DaySchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: [true, "A Day must have a date"],
      unique: [true, "A Day must have a unique date"],
    },
    picture: {
      title: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      hint: {
        type: String,
        required: true,
      },
      alternateImage: {
        type: String,
        required: false,
      },
    },
    isEditable: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Day = mongoose.model("Day", DaySchema);
