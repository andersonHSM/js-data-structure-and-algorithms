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
    let slotsToRelease = elementsToInsert.length - emptySlots;

    while (slotsToRelease > 0) {
      for (let i = array.length + 1; i >= currentIndex; i--) {
        array[i] = array[i - 1];
      }
      slotsToRelease--;
    }
  }

  currentIndex = index;

  for (let i = 0; i < elementsToInsert.length; i++) {
    array[currentIndex] = elementsToInsert[i];
    currentIndex++;
  }
};

const reindexArray = (array: any[]) => {
  let indexToInsert = 0;
  let newArray = [];
  for (const item of array) {
    if (item) {
      newArray[indexToInsert] = item;
      indexToInsert++;
    }
  }

  return newArray;
};

export const customSplice = (
  array: any[],
  index: number,
  deleteCount?: number,
  ...elementsToInsert: any[]
) => {
  if (index > array.length) return;
  let indexToInsert = index;
  const deleteCountToUse = deleteCount || array.length - index;

  if (index > 0) {
    deleteFromPositiveIndex(array, index, deleteCountToUse);
  } else {
    const absoluteIndex = Math.abs(index);
    let indexToUse = array.length - absoluteIndex;

    if (absoluteIndex > array.length) indexToUse = 0;

    deleteFromPositiveIndex(array, indexToUse, deleteCountToUse);

    indexToInsert = indexToUse;
  }
  console.log({ array });

  insertFromGivenIndex(array, indexToInsert, ...elementsToInsert);

  return array.filter(Boolean);
};
