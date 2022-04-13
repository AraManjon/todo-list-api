import { Request, Response } from "express";
import { Controller } from "./Controller";

export default class TasksPutController implements Controller {
    run(req: Request, res: Response): Promise<void> {
        throw new Error("Method not implemented.");
    }
}