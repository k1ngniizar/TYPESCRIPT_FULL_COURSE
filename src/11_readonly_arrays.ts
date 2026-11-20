// Immutable arrays;
const testArray = [1, 2, 3, 4];
const readOnlyArrayShort: readonly number[] = [1, 2, 3, 4];
const readOnlyArray: ReadonlyArray<number> = [1, 2, 3, 4];

function readFn(val: readonly number[]): number[] {
  const newVal = val.map((v) => v * 2);

  return newVal;
}

console.log(readFn(testArray));
