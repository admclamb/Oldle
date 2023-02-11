import * as express from 'express';
import { DayController } from '../controllers/DayController';
import { ErrorHandler } from '../errors/Error';

export class DayRotuer {
  private static router = express.Router();
  public static routes() {
    this.router
      .route('/:date')
      .get(DayController.read)
      .all(ErrorHandler.methodNotAllowed);
  }
}
