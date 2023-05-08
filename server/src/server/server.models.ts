import { Request } from 'express';
import ServerError from '../utils/error.js';

/**
 *
 * Returns a JSON object with details of server.
 *
 * @returns Info about server and/or API
 */

export const aboutModel = () => {
  const aboutJson = {
    server: {
      name: 'Hello-World',
      version: '1.0.0',
      description: 'The best API in the world',
    },
  };

  return aboutJson;
};

/**
 *
 *  Returns a JSON object with details of the error.
 *
 * @param err - The error object for type and status code
 * @param req - The request for the requested path
 * @returns Details of the error
 */
export const errorModel = (err: ServerError, req: Request) => {
  const errorJson = {
    error: {
      path: req.path,
      statusCode: err.statusCode || 500,
      message: err.message,
    },
  };

  return errorJson;
};

/**
 *
 *  Outputs the error in to console
 *
 * @param err - The error object for type and status code
 * @param req - The request for the requested path
 */
export const errorLoggingModel = (err: ServerError, req: Request) => {
  const customError: boolean =
    err.constructor.name === 'NodeError' ||
    err.constructor.name === 'SyntaxError'
      ? false
      : true;

  if (!customError) {
    console.log(
      `Type: ${
        err.constructor.name === 'NodeError'
          ? 'UnhandledError'
          : err.constructor.name
      }`
    );
    console.log(`Path: ${req.path}`);
    console.log(`Status code: ${err.statusCode || 500}`);
    console.log(err.stack);
  }
};
