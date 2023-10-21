//Array Operations
//Head

const headArray: number[] = [10, 20, 30, 40, 50];

const head: <T>(arr: T[]) => T = <T>(
  arr: T[]
): T => {
  const [first, ] = arr;
  return first;
};

console.log('Array operations exercise, head part')
console.log(`Here is whole array ${headArray}`)
console.log(`Here is the first element: ${head(headArray)}`);