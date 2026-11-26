function describeTypeOf(x: unknown) {
  if (typeof x === "string") {
    return `${x} is a string.`;
  }
  if (typeof x === "number") {
    return `${x} is a number.`;
  }
  if (typeof x === "boolean") {
    return `${x} is a boolean.`;
  }
  if (typeof x === "bigint") {
    return `${x} is a bigint.`;
  }
  if (typeof x === "symbol") {
    return `${String(x)} is a symbol.`;
  }
  if (typeof x === "undefined") {
    return `${x} is a undefined.`;
  }
  if (typeof x === "function") {
    return `${x} is a function.`;
  }
}
const btnEl = document.createElement("button");

console.log(
  describeTypeOf("hi"),
  describeTypeOf(23),
  describeTypeOf(true),
  describeTypeOf(10n),
  describeTypeOf(Symbol("eben")),
  describeTypeOf(undefined),
  describeTypeOf(() => {}),
  describeTypeOf(null),
  describeTypeOf({}),
  describeTypeOf([]),
  describeTypeOf(btnEl),
  describeTypeOf(NaN), // will macth typeof number
  describeTypeOf(new Date()), //will match typeof object
  describeTypeOf(new Error("Ops! An error occured!")), //will match typeof object
);
