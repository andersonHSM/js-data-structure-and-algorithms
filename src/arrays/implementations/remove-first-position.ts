export const removeFirstPosition = (array: any[]) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];

    if (!!array[i]) {
      newArray[i] = array[i];
    }
  }

  return newArray;
};
