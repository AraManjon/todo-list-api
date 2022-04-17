import { Request, Response } from "express";
import httpStatus from "http-status";
import { TaskCreator } from "../../tasks/application/TaskCreator";
import { Controller } from "./Controller";

type TaskPutRequest = Request & {
    body: {
        id: string,
        name: string,
        description: string
    }
}

export default class TasksPutController implements Controller {

    constructor(private tasksCreator: TaskCreator) { }

    async run(req: TaskPutRequest, res: Response) {
        const { id, name, description } = req.body
        
        await this.tasksCreator.run({ id, name, description })

        res.status(httpStatus.CREATED).send()
    }
}