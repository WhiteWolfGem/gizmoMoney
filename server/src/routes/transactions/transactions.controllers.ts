import { Request, Response } from 'express';
import asyncHandler from '../../utils/asyncHandler.js';

export const getAllTransactions = asyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).setHeader('x-total-count', '1').json({ count: 1 });
  }
);
