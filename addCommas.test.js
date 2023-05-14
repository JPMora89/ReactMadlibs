const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test('adds commas to a small number', () => {
    expect(addCommas(123)).toBe('123');
  });
  
  test('adds commas to a larger number with even digits', () => {
    expect(addCommas(12345678)).toBe('12,345,678');
  });
  
  test('adds commas to a larger number with odd digits', () => {
    expect(addCommas(123456789)).toBe('123,456,789');
  });
  
  test('handles zero input correctly', () => {
    expect(addCommas(0)).toBe('0');
  });
  
  test('handles negative input correctly', () => {
    expect(addCommas(-12345)).toBe('-12,345');
  });
});
