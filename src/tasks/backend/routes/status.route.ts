import { Response, Request, Router } from "express";
import StatusGetController from "../controllers/StatusGetController";
import container from "../dependency-injection";

export const register = (router: Router) => {

    const controller : StatusGetController = container.get('tasks.controllers.StatusGetController')
    router.get('/status', (req: Request, res: Response) => controller.run(req, res))
}