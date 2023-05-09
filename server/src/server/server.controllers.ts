/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import ServerError from '../utils/error.js';
import { errorModel, errorLoggingModel, aboutModel } from './server.models.js';

export const aboutController = asyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).json(aboutModel());
  }
);

export const error404Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return next(new ServerError(404, 'Endpoint Not Found'));
};

export const errorController = (
  err: ServerError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.statusCode || 500).json(errorModel(err, req));
  next(err);
};

export const errorLoggingController = (
  err: ServerError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  errorLoggingModel(err, req);
};
