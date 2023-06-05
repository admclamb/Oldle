import { NextFunction, query, Request, Response } from "express";
import { Day } from "../models/DayModel";
import { DataValidator } from "../utils/DataValidator";
export class DayController {
  private static validProperties = ["date", "pictures"];

  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const days = await Day.find();
      res.status(200).json({ data: days });
    } catch (error: any) {
      return next({
        status: 500,
        message: "Error getting days.",
      });
    }
  }

  public static async read(req: Request, res: Response, next: NextFunction) {
    const { date } = req.params;
    if (date) {
      const day = await Day.findOne({ date });
      console.log("DAY: ", day);
      res.status(200).json({ data: day });
    }
    return next({ status: 400, message: "Invalid date provided" });
  }

  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { data } = req.body;
      DataValidator.hasValidProperties(this.validProperties, data);
      DataValidator.hasRequiredProperties(this.validProperties, data);
      const createdDay = await Day.create(data);
      res.status(200).json({ data: createdDay });
    } catch (error: any) {
      return next({
        status: 400,
        message: error.message,
      });
    }
  }
}
