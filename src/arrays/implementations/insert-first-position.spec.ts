import { insertFirstPosition } from "./insert-first-position";
describe("Insert First Position", () => {
  it("should add single item to first position", () => {
    const array = [2, 3, 4];
    const expectedArray = [1, 2, 3, 4];

    insertFirstPosition(array, 1);

    expect(array).toEqual(expectedArray);
  });

  it("should add multiple itens to array beggining passing as parameters", () => {
    const array = [4, 5, 6];
    const expectedArray = [1, 2, 3, 4, 5, 6];

    insertFirstPosition(array, 1, 2, 3);

    expect(array).toEqual(expectedArray);
  });

  it("should add multiple itens to array beggining passing as destructured array", () => {
    const array = [4, 5, 6];
    const expectedArray = [1, 2, 3, 4, 5, 6];

    insertFirstPosition(array, ...[1, 2, 3]);

    expect(array).toEqual(expectedArray);
  });
});
