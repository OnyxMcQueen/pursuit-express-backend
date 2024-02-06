const { calculateThreePointAverage } = require("./numberUtils");

describe("Return a player's three point average over a season", () => {
  it("Handles empty array by returning 0", () => {
    expect(calculateThreePointAverage([])).toBe(0);
  });
  it("Handles one length array", () => {
    expect(calculateThreePointAverage([35])).toBe(35);
  });
  it("Returns calculated average for all elements in the array rounded to one decimal place", () => {
    expect(calculateThreePointAverage([35, 40, 27, 55])).toBe(39.3);
  })
});
