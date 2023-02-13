import { NextFunction, query, Request, Response } from 'express';
import { Day } from '../models/DayModel';
import { PropertyValidator } from '../utils/PropertyValidator';
export class DayController {
  private static validProperties = ['date', 'pictures'];

  public static async read(req: Request, res: Response, next: NextFunction) {
    const { date: queryDate } = req.params;
    if (queryDate) {
      const date = new Date(queryDate);
      const day = await Day.findOne({ date });
      res.status(200).json({ data: day });
    }
    return next({ status: 400, message: 'Invalid date provided' });
  }

  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { data } = req.body;
      PropertyValidator.hasValidProperties(this.validProperties, data);
      PropertyValidator.hasRequiredProperties(this.validProperties, data);
      const createdDay = await Day.create(data);
      res.status(200).json({ data: createdDay });
    } catch (error) {
      return next({
        status: 400,
        message: error.message,
      });
    }
  }
}
