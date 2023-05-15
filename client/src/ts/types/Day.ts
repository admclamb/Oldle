import { Picture } from "./Picutre";

export type Day = {
  _id: string;
  date: Date;
  picture: {
    title: string;
    image: string;
    date: Date;
    hint: string;
    alternateImage?: string;
  };
  isEditable: false;
  createdAt: Date;
  updatedAt: Date;
};
