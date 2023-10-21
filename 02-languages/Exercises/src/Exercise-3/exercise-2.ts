//CLONE MERGE
// Merge

const sourceObj = { name: "Maria", surname: "Ibañez", country: "SPA" };
const targetObj = { name: "Luisa", age: 31, married: true };

const merge: <T, Q>(source: T, target: Q) => T & Q = <T, Q>(
  source: T,
  target: Q
): T & Q => {
  return { ...target, ...source };
};

console.log("Clone Merge exercise, merge part");
console.log(`Here is the source object: `, sourceObj);
console.log(`Here is the cloned object: `, merge(sourceObj, targetObj));
