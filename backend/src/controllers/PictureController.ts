import { NextFunction, Request, Response } from 'express';

export class PictureController {
  public static async read(req: Request, res: Response, next: NextFunction) {}

  public static async list(req: Request, res: Response, next: NextFunction) {}

  public static async create(req: Request, res: Response, next: NextFunction) {}

  public static async destroy(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}
}
