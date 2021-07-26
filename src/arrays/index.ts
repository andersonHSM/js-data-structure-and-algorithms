import { customSplice } from "./implementations/custom-splice";
import { insertFirstPosition } from "./implementations/insert-first-position";
import { insertLastPosition } from "./implementations/insert-last-position";
import { removeFirstPosition } from "./implementations/remove-first-position";
import { removeLastPosition } from "./implementations/remove-last-position";

// const arrayToInsertInFirstPosition = [4, 5, 6, 7];

// insertFirstPosition(arrayToInsertInFirstPosition, 1, 2, 3);

// console.log(arrayToInsertInFirstPosition);

// const arrayToInsertInLastPosition = [1, 2, 3, 4];

// insertLastPosition(arrayToInsertInLastPosition, 5, 6);

// console.log(arrayToInsertInLastPosition);

// let arrayToRemoveLastPosition = [1, 2, 3, 4];

// arrayToRemoveLastPosition = removeLastPosition(arrayToRemoveLastPosition);

// console.log(arrayToRemoveLastPosition);

// let arrayToRemoveFirstPosition = [0, 1, 2, 3, 4];

// arrayToRemoveFirstPosition = removeFirstPosition(arrayToRemoveFirstPosition);

// console.log(arrayToRemoveFirstPosition);

let arrayToSplice = [0, 1, 2, 3, 4, 5];
// console.log(arrayToSplice.splice(1, 2, 4, 3));

customSplice(arrayToSplice, 2, 2, 3, 4, 5, 6, 7, 8);

// arrayToSplice.splice(2, 2, 3, 4, 6, 7);

// console.log(arrayToSplice);
