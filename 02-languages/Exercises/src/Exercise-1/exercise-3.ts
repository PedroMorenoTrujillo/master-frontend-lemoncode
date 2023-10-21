//Array Operations
//Init

const initArray: number[] = [10, 20, 30, 40, 50];

const init: <T>(arr: T[]) => T[] = <T>(
  arr: T[]
): T[] => {
  arr.pop();
  return arr;
};
console.log('Array operations exercise, init part')
console.log(`Here is whole array ${initArray}`)
console.log(`Here are the array unless last element: ${init(initArray)}`);