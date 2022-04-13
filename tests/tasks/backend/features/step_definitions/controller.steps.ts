import { AfterAll, BeforeAll, Given, Then } from 'cucumber';
import request from 'supertest';
import { Application } from '../../../../../src/tasks/backend/Application';

let _request: request.Test;
let application: Application;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

BeforeAll(async () => {
    application = new Application();
    await application.start();
  });
  
  AfterAll(async () => {
    await application.stop();
  });
