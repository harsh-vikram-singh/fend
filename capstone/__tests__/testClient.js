import getRemainingDays from '../src/client/js/countdown.js';

test("It should be a function", () => {
  expect(typeof getRemainingDays).toBe("function")
})