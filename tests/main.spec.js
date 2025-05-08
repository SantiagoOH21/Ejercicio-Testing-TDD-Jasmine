describe("is even kata", () => {
  it("should exist esPar", () => {
    expect(esPar).not.toBe(undefined);
  });

  it("should be a function", () => {
    expect(typeof esPar).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof esPar()).toEqual("boolean");
  });

  it("should return true if number is even", () => {
    expect(esPar(4)).toBe(true);
  });

  it("should return false if number is odd", () => {
    expect(esPar(7)).toBe(false);
  });
});

describe("factorial kata", () => {
  it("should exist factorial", () => {
    expect(factorial).not.toBe(undefined);
  });

  it("should be a function", () => {
    expect(typeof factorial).toEqual("function");
  });

  it("should return a number", () => {
    expect(typeof factorial(5)).toEqual("number");
  });

  it("should return 1", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 120", () => {
    expect(factorial(5)).toBe(120);
  });

  it("should return NaN", () => {
    const result = factorial(-3);
    expect(isNaN(result)).toBe(true);
  });
});
