import { sum, duplicateValue } from "./index.js";

test("should provide the sum of 2 values", () => {
  expect(sum(1, 2)).toBe(3); // no need to import these
});

describe("duplication", () => {
  // to be uses Object.is to compare two values
  // for primitives, the value itself will be evaluated and compared. Even if it though it takes up a new space in memory
  // for objects, tobe will fail as they take up different spaces in memory. use toequal instead
  test("should duplicate primitive value", () => {
    expect(duplicateValue(5)).toBe(5); // pass
  });

  // using not to be because the 2 objects are different instances. they are not equal despite having same values
  test("should not duplicate complex value", () => {
    expect(duplicateValue({ id: "1", name: "mike" })).not.toBe({
      id: "1",
      name: "mike",
    });
  });

  // passes beacuse the values of the objects are the same despite being different objects
  test("complex value should mirror given value", () => {
    expect(duplicateValue({ id: "1", name: "mike" })).toEqual({
      id: "1",
      name: "mike",
    });
  });

  // this is a bad test, it passes because of pass by reference - the object returned is the same in memory as the one passed in because we save it to a var
  // test("should pass because of pass by value", () => {
  //   const testObj = { id: "1", name: "mike" };
  //   expect(duplicateValue(testObj)).toBe(testObj);
  // });
});
