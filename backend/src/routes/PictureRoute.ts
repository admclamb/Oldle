import * as express from 'express';
import { ErrorHandler } from '../errors/Error';
import { PictureController } from '../controllers/PictureController';
export class PictureRouter {
  private static router = express.Router();
  public static routes() {
    express
      .Router()
      .route('/')
      .get(PictureController.list)
      .post(PictureController.create)
      .all(ErrorHandler.methodNotAllowed);

    express
      .Router()
      .route('/:picture_id')
      .get(PictureController.read)
      .put(PictureController.update)
      .delete(PictureController.destroy)
      .all(ErrorHandler.methodNotAllowed);
  }
}
