import { insertLastPosition } from "./insert-last-position";

describe("Insert last position tests", () => {
  it(`should insert one item at array's last position`, () => {
    const array = [1, 2, 3];
    const expectedArray = [1, 2, 3, 4];

    insertLastPosition(array, 4);

    expect(array).toEqual(expectedArray);
  });

  it(`should insert multiple itens at array's last positions as parameters`, () => {
    const array = [1, 2, 3];
    const expectedArray = [1, 2, 3, 4, 5, 6];

    insertLastPosition(array, 4, 5, 6);

    expect(array).toEqual(expectedArray);
  });

  it(`should insert multiple itens at array's last positions as distructure array`, () => {
    const array = [1, 2, 3];
    const expectedArray = [1, 2, 3, 4, 5, 6];

    insertLastPosition(array, ...[4, 5, 6]);

    expect(array).toEqual(expectedArray);
  });
});
