import { Request, Response, NextFunction } from 'express';

export class ErrorHandler {
  public static asyncErrorBoundary(delegate: any, defaultStatus = 500) {
    return (request: Request, response: Response, next: NextFunction) => {
      Promise.resolve()
        .then(() => delegate(request, response, next))
        .catch((error = {}) => {
          const { status = defaultStatus, message = error } = error;
          return next({
            status,
            message,
          });
        });
    };
  }

  public static errorHandler(
    error: { status: number; message: string },
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { status = 500, message = 'Something went wrong!' } = error;
    res.status(status).json({ error: message });
  }

  public static methodNotAllowed(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    return next({
      status: 405,
      message: `${req.method} not allowed for ${req.originalUrl}`,
    });
  }

  public static notFound(req: Request, res: Response, next: NextFunction) {
    return next({ status: 404, message: `Path not found: ${req.originalUrl}` });
  }
}
