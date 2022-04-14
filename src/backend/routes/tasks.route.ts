import { Response, Request, Router } from "express";
import TasksPutController from "../controllers/TasksPutController";
import container from "../dependency-injection";
import { body } from 'express-validator'
import { validateReqSchema } from ".";

export const register = (router: Router) => {
    const reqSchema = [
        body('id').exists().isString(),
        body('name').exists().isString(),
        body('description').exists().isString(),
    ]
    const controller: TasksPutController = container.get('controllers.TasksPutController')
    router.put('/tasks/:id', reqSchema, validateReqSchema, (req: Request, res: Response) => controller.run(req, res))
}