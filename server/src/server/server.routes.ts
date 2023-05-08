import { Router } from 'express';
import {
  aboutController,
  error404Controller,
  errorController,
  errorLoggingController,
} from './server.controllers.js';

const serverRouter = Router();

//About
serverRouter.get('/about', aboutController);

//404 Error
serverRouter.use(error404Controller);

//Main Error Handling
serverRouter.use(errorController);
serverRouter.use(errorLoggingController);

export default serverRouter;
