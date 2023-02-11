import { NextFunction, Request, Response } from 'express';
import { Day } from '../models/DayModel';
export class DayController {
  public static async read(req: Request, res: Response, next: NextFunction) {
    const queryDate = req.query.date;
    if (queryDate) {
      const date = new Date(queryDate);
      if (date) {
        const day = await Day.findOne(date);
        res.status(200).json({ data: day });
      }
    }

    return next({ status: 400, message: 'Invalid date provided' });
  }
}
