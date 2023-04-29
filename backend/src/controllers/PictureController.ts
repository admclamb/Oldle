import { NextFunction, Request, Response } from "express";
import { DatabaseErrorHandler } from "../errors/DatabaseErrorHandler";
import { Picture } from "../models/PictureModel";
import { DataValidator } from "../utils/DataValidator";

export class PictureController {
  private static validProperties = ["url", "date", "_id"];

  private static requiredProperties = ["url", "date"];

  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({ data: await Picture.find() });
    } catch (error) {
      return next(DatabaseErrorHandler.handleError(error));
    }
  }
  public static async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.params;
      const foundPicture = await Picture.findById(_id);
      if (foundPicture) {
        res.status(200).json({ data: foundPicture });
      }
      return next({ status: 404, message: "Picture not found." });
    } catch (error) {
      console.log(error);
      return next(DatabaseErrorHandler.handleError(error));
    }
  }

  public static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { data } = req.body;
      DataValidator.hasValidProperties(PictureController.validProperties, data);
      DataValidator.hasRequiredProperties(
        PictureController.requiredProperties,
        data
      );
      const { _id = null } = data;
      if (!_id) {
        return next({
          status: 400,
          message: "A picture id is required.",
        });
      }
      const filter = { _id };
      const updatedPicture = await Picture.findOneAndUpdate(filter, data, {
        new: true,
      });
      if (updatedPicture) {
        return res.status(200).json({ data: updatedPicture });
      }
    } catch (error) {
      console.log(error);
      return next(DatabaseErrorHandler.handleError(error));
    }
  }

  public static async destroy(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.body.data;
      if (_id) {
        const deleted = await Picture.findByIdAndDelete(_id);
        console.log(deleted);
        return res.sendStatus(204);
      }
      return next({
        status: 400,
        message: "Picture id not found.",
      });
    } catch (error) {
      console.log(error);
      return next(DatabaseErrorHandler.handleError(error));
    }
  }
}
