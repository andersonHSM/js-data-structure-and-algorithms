export const insertFirstPosition = (array: any[], ...valuesToInsert: any[]) => {
  for (let j = valuesToInsert.length - 1; j >= 0; j--) {
    for (let i = array.length; i >= 0; i--) {
      array[i] = array[i - 1];
    }

    array[0] = valuesToInsert[j];
  }
};
