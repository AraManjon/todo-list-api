import { Application } from './Application';

try {
  new Application().start();
} catch (e) {
  console.log(e);
}
