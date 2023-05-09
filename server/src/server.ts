import express, { Application, NextFunction, Response, Request } from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
import serverRouter from './server/server.routes.js';
import mainRouter from './routes/routes.js';
import pool from './utils/database.js';
dotenv.config();

// Configure server
const port = process.env.PORT || 3000;
const app: Application = express();
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('X-Powered-By', 'Rainbow Unicorn Cat');
  next();
});

app.use(mainRouter);

// Start server
app.use(serverRouter);

const server = app.listen(port, (): void => {
  console.log(`SERVER IS RUNNING ON PORT: ${port}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    pool.end();
    console.log('SERVER IS TERMINATED');
  });
});

export default server;
