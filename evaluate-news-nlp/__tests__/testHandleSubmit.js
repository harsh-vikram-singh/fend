import { handleSubmit } from '../src/client/js/formHandler.js';

test("It should be a function", () => {
  expect(typeof handleSubmit).toBe("function")
})