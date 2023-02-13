import express, { Application } from 'express';
import cors from 'cors';
import * as path from 'path';
import { ErrorHandler } from './errors/Error';
import { PictureRouter } from './routes/PictureRoute';

require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const dayRouter = require('./routes/DayRoute');
export class App {
  instance: Application;

  constructor() {
    this.instance = express();
  }

  private setRoutes() {
    this.instance.use('/day', dayRouter);
    this.instance.use('/picture', PictureRouter.routes);
  }

  public config() {
    this.instance.use(cors());
    this.instance.use(express.json());
    this.setRoutes();
    this.instance.use(ErrorHandler.notFound);
    this.instance.use(ErrorHandler.errorHandler);
  }

  public listen(PORT: string, listener: any) {
    this.instance.listen(PORT, listener);
  }
}
