import { removeLastPosition } from "./remove-last-position";

describe("Remove last position tests", () => {
  it(`should remove one item at array's last position`, () => {
    const array = [1, 2, 3];

    const expectedArray = removeLastPosition(array);

    expect(expectedArray).toEqual([1, 2]);
  });
});
