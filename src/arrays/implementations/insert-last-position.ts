export const insertLastPosition = (array: any[], ...valuesToInsert: any[]) => {
  for (let i = 0; i < valuesToInsert.length; i++) {
    array[array.length] = valuesToInsert[i];
  }
};
