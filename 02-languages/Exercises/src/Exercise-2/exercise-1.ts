//Concat

const firstConcatArray: number[] = [10, 20];
const secondConcatArray: number[] = [30, 40];

const concat: <T>(first: T[], second: T[]) => T[] = <T>(
  first: T[],
  second: T[]
): T[] => {
  return [...first, ...second];
};

console.log("Concat exercise, first part");
console.log(
  `Here are whole arrays: first array ${firstConcatArray}, second array: ${secondConcatArray}`
);
console.log(
  `Here are the concat array: ${concat(firstConcatArray, secondConcatArray)}`
);

const thirdConcatArray: number[] = [50, 60];
const fourthConcatArray: number[] = [70, 80];

const concatMultiple: <T>(...args: T[][])=>T[] = <T>(...arrays: T[][]): T[] => {
    return [...arrays.reduce((acc, arr: T[]) => [...acc, ...arr], [])];
};

console.log("Concat exercise, optional part");
console.log(
  `Here are the other arrays: third array ${thirdConcatArray}, fourth array: ${fourthConcatArray}`
);
console.log(
  `Here are the concat multiple array: ${concatMultiple(firstConcatArray, secondConcatArray, thirdConcatArray, fourthConcatArray)}`
);