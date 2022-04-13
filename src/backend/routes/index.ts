import { Request, Response } from 'express'
import { Router } from 'express';
import glob from 'glob';
import { ValidationError, validationResult } from 'express-validator';
import httpStatus from 'http-status';

export const registerRoutes = (router: Router) => {
  const routes = glob.sync(__dirname + '/**/*.route.*');
  routes.forEach((route: string) => register(route, router));
}

const register = (routePath: string, router: Router) => {
  const route = require(routePath);
  route.register(router);
}

export const validateReqSchema = (req: Request, res: Response, next: Function) => {
  const validationsErrors = validationResult(req)

  if (validationsErrors.isEmpty()) {
    return next()
  }
  const errors = validationsErrors.array().map((error: ValidationError) => ({ [error.param]: error.msg }))

  return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
    errors
  })
}