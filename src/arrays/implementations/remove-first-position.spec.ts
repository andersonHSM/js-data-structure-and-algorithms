import { removeFirstPosition } from "./remove-first-position";

describe("Remove first position tests", () => {
  it(`should remove one item at array's first position`, () => {
    const array = [1, 2, 3];

    const expectedArray = removeFirstPosition(array);

    expect(expectedArray).toEqual([2, 3]);
  });
});
