import express, { Application } from 'express';
import cors from 'cors';
import * as path from 'path';
import { ErrorHandler } from './errors/Error';
import { DayRotuer } from './routes/DayRoute';
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

export class App {
  instance: Application;

  constructor() {
    this.instance = express();
  }

  private setRoutes() {
    this.instance.use('/day', DayRotuer.routes);
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
