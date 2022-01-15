import sum from "./index.js";

test("should provide the sum of 2 values", () => {
  expect(sum(1, 2)).toBe(3); // no need to import these
});
