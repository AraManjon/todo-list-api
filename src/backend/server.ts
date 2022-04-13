
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { json, urlencoded } from 'body-parser';
import * as http from 'http';
import { registerRoutes } from './routes';

export class Server {
    private express: express.Express;
    private port: string 
    private httpServer?: http.Server;

    constructor(port: string) {
        this.port = port
        this.express = express()
        this.configExpress()
        this.addRoutes()
    }

    private configExpress () {
        this.express.use(helmet())
        this.express.use(cors())
        this.express.use(json())
        this.express.use(urlencoded({ extended: true }));
    }

    private addRoutes () {
      registerRoutes(this.express);
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