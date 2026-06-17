const { add, subtract, multiply, divide } = require("./calculator");

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("multiplies two numbers", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("divides two numbers", () => {
    expect(divide(12, 3)).toBe(4);
  });

  test("throws on division by zero", () => {
    expect(() => divide(1, 0)).toThrow("division by zero");
  });
});
