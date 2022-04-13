import { Router } from 'express';
import glob from 'glob';

export const registerRoutes = (router: Router) =>  {
  const routes = glob.sync(__dirname + '/**/*.route.*');
  routes.forEach((route: string) => register(route, router));
}

const register = (routePath: string, router: Router) => {
  const route = require(routePath);
  route.register(router);
}