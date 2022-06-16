const { getHours } = require("./time");

describe("time", () => {
  it("getHours", () => {
    // expect(getHours()).toBeGreaterThanOrEqual(0);
    expect(getHours()).toBeLessThanOrEqual(24);
  });
});
