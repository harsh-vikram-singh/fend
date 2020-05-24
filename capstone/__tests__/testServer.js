import { serveFile } from '../src/server/index.js';

test("It should be a function", () => {
  expect(typeof serveFile).toBe("function")
})