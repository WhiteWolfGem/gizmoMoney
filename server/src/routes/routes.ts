import { Router } from 'express';
import transactionsRouter from './transactions/transactions.routes.js';

const mainRouter = Router();

mainRouter.use('/transactions', transactionsRouter);

export default mainRouter;
