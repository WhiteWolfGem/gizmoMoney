import { Router } from 'express';
import { getAllTransactions } from './transactions.controllers.js';

const transactionsRouter = Router();

transactionsRouter.get('/', getAllTransactions);

export default transactionsRouter;
