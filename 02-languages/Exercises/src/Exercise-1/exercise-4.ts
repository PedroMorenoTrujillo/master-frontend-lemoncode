//Array Operations
//Last

const lastArray: number[] = [10, 20, 30, 40, 50];

const last: <T>(arr: T[]) => T = <T>(
  arr: T[]
): T => {
  return arr.pop();
};
console.log('Array operations exercise, last part')
console.log(`Here is whole array ${lastArray}`)
console.log(`Here are the array unless last element: ${last(lastArray)}`);