import express, { Application } from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
import serverRouter from './server/server.routes.js';
dotenv.config();

// Configure server
const port = process.env.PORT || 3000;
const app: Application = express();
app.use(cors());

// route declarations

// Start server
app.use(serverRouter);
const server = app.listen(port, (): void => {
  console.log(`SERVER IS RUNNING ON PORT: ${port}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('SERVER IS TERMINATED');
  });
});

export default server;
