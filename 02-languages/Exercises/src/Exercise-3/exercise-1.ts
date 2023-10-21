//CLONE MERGE
// Clone

const sourceObject = {
  name: "Maria",
  surname: "Ibañez",
  country: "SPA",
};

function clone<T>(source: T): T {
  return { ...source };
}

console.log("Clone Merge exercise, clone part");
console.log(`Here is the source object: `, sourceObject);
console.log(`Here is the cloned object: `, clone(sourceObject));
