//Array Operations
//Tail

const tailArray: number[] = [10, 20, 30, 40, 50];

const tail: <T>(arr: T[]) => T[] = <T>(
  arr: T[]
): T[] => {
  const [, ...args] = arr;
  return args;
};
console.log('Array operations exercise, tail part')
console.log(`Here is whole array ${tailArray}`)
console.log(`Here are the rest elements: ${tail(tailArray)}`);