import mongoose from "mongoose";

const PictureSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "A Picture must have an image url"],
    unique: [true, "A Picutre url must be unique"],
  },
  year: {
    type: Number,
    required: [true, "A Picture must have a year"],
  },
});

export const Picture = mongoose.model("Picture", PictureSchema);
