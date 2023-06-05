import mongoose from "mongoose";

const PictureSchema = new mongoose.Schema({
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
});

export const Picture = mongoose.model("Picture", PictureSchema);
