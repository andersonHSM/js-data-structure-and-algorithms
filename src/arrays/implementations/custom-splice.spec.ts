import { customSplice } from "./custom-splice";

describe("Remove first position tests", () => {
  it(`should remove all itens from given position`, () => {
    const array = [1, 2, 3];
    const expectedArray = [1];

    const splicedArray = customSplice(array, 1);

    expect(splicedArray).toEqual(expectedArray);
  });

  it(`should remove a given number of itens from a given index`, () => {
    const array = [1, 2, 3];
    const expectedArray = [1, 3];

    const splicedArray = customSplice(array, 1, 1);

    expect(splicedArray).toEqual(expectedArray);
  });

  it(`should remove all itens for a given negative index`, () => {
    const array = [1, 2, 3];
    const expectedArray = [1, 2];

    const splicedArray = customSplice(array, -1);

    expect(splicedArray).toEqual(expectedArray);
  });

  it(`should remove all itens for a given index and insert new values`, () => {
    const array = [1, 2, 3];
    const expectedArray = [1, 2, 49, 50, 51, 52];

    const splicedArray = customSplice(array, 2, 1, 49, 50, 51, 52);

    expect(splicedArray).toEqual(expectedArray);
  });

  fit(`should remove all itens for a given negative index and insert new values`, () => {
    const array = [0, 1, 2, 3, 4, 5];
    const expectedArray = [0, 1, 49, 50, 51, 52, 4, 5];

    const splicedArray = customSplice(array, -4, 2, 49, 50, 51, 52);

    console.log({ splicedArray });

    expect(splicedArray).toEqual(expectedArray);
  });
});
