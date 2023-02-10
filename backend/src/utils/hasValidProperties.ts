import { Request, Response, NextFunction } from 'express';

export function hasValidProperties(validProperties: string[]) {
  console.log('in here');
  return function (req: Request, res: Response, next: NextFunction) {
    const { data = {} } = req.body;
    const invalidFields: string[] = Object.keys(data).filter(
      (field: string) => !validProperties.includes(field)
    );
    if (invalidFields.length) {
      return next({
        status: 400,
        message: `Invalid field(s): ${invalidFields.join(', ')}`,
      });
    }
    next();
  };
}
