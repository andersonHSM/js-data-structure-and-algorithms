const deleteFromPositiveIndex = (
  array: any[],
  index: number,
  deleteCount: number
) => {
  let currentIndex = index;

  for (let i = 0; i < deleteCount; i++) {
    array[currentIndex] = undefined;
    currentIndex += 1;
  }
};

const insertFromGivenIndex = (
  array: any[],
  index: number,
  ...elementsToInsert: any[]
) => {
  let currentIndex = index;

  let shouldReindex = false;

  for (let i = index; i < elementsToInsert.length; i++) {
    currentIndex++;

    if (!array[i]) {
      shouldReindex = true;
      currentIndex++;
      break;
    }
  }

  if (shouldReindex) {
    const emptySlots = currentIndex - index;
    const slotsToRelease = elementsToInsert.length - emptySlots;

    let arrayIndexToModify = array.length - 1;

    for (let i = slotsToRelease; i > 0; i--) {
      array[i + 1] = array[i];
    }
  }

  console.log(array);

  for (let i = 0; i < elementsToInsert.length; i++) {
    array[currentIndex] = elementsToInsert[i];
    currentIndex++;
  }
};

export const customSplice = (
  array: any[],
  index: number,
  deleteCount: number,
  ...elementsToInsert: any[]
) => {
  if (index > array.length) return;
  let indexToInsert = index;

  if (index > 0) {
    deleteFromPositiveIndex(array, index, deleteCount);
  } else {
    const absoluteIndex = Math.abs(index);
    let indexToUse = array.length - absoluteIndex;

    if (absoluteIndex > array.length) indexToUse = 0;

    deleteFromPositiveIndex(array, indexToUse, deleteCount);

    indexToInsert = indexToUse;
  }

  insertFromGivenIndex(array, indexToInsert, ...elementsToInsert);
};
