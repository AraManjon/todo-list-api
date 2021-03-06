
import express, { Request, Response } from 'express';
import cors from "cors";
import helmet from "helmet";
import errorHandler from 'errorhandler';
import { json, urlencoded } from 'body-parser';
import * as http from 'http';
import httpStatus from 'http-status';
import Router from 'express-promise-router';
import Logger from '../shared/domain/Logger';
import container from './dependency-injection';
import { registerRoutes } from './routes';

export class Server {
  private express: express.Express;
  private port: string
  private logger: Logger;
  private httpServer?: http.Server;

  constructor(port: string) {
    this.port = port
    this.logger = container.get('Logger');
    this.express = express()
    this.express.use(helmet())
    this.express.use(cors())
    this.express.use(json())
    this.express.use(urlencoded({ extended: true }));
    const router = Router();
    router.use(errorHandler());
    this.express.use(router);
    registerRoutes(router);

    router.use((err: Error, req: Request, res: Response, next: Function) => {
      this.logger.error(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  public async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(
          `  Task Backend App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`
        );
        console.log('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  public getHTTPServer() {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }
}