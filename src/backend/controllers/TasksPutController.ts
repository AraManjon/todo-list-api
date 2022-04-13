import { Request, Response } from "express";
import httpStatus from "http-status";
import { TaskCreator } from "../../tasks/application/TaskCreator";
import { Controller } from "./Controller";

export default class TasksPutController implements Controller {
    constructor(private tasksCrator: TaskCreator) {

    }
    async run(req: Request, res: Response): Promise<void> {
        const {id, name, description} = req.body
        
        await this.tasksCrator.run(id, name, description)

        res.status(httpStatus.CREATED).send()
    }
}