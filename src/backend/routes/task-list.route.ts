import { Response, Request, Router } from "express";
import TasksPutController from "../controllers/TasksPutController";
import container from "../dependency-injection";

export const register = (router: Router) => {
   
    const controller: TasksPutController = container.get('controllers.TaskListGetController')
    router.get('/tasks', (req: Request, res: Response) => controller.run(req, res))
}