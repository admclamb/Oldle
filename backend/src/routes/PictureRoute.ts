import * as express from "express";
import { ErrorHandler } from "../errors/Error";
import { PictureController } from "../controllers/PictureController";

const router = express.Router();

router
  .route("/")
  .get(PictureController.list)
  .all(ErrorHandler.methodNotAllowed);

router
  .route("/:picture_id")
  .get(PictureController.read)
  .all(ErrorHandler.methodNotAllowed);

export const pictureRouter = router;
