import { NextFunction, Request, Response } from 'express';

export class DayController {
  public static read(req: Request, res: Response, next: NextFunction) {
    const date = new Date(req.query.date);
    const response = 
  }
}
