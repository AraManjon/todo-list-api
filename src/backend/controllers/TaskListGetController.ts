import { Request, Response } from "express";
import httpStatus from "http-status";
import { TasksFinder } from "../../tasks/application/TasksFinder";
import { Controller } from "./Controller";

export default class TaskListGetController implements Controller {

    constructor(private tasksFinder: TasksFinder) { }

    async run(_req: Request, res: Response) {

        const response = await this.tasksFinder.run()

        res.header('Access-Control-Allow-Origin', '*');
        res.status(httpStatus.OK).send(response)
    }
}