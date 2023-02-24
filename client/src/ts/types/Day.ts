import { Picture } from './Picutre';

export type Day = {
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  is_editable: boolean;
  images: [Picture];
};
