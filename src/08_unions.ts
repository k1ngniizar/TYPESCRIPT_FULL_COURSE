//Primitive union

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toLocaleLowerCase());
    return;
  }

  if (typeof id === "number") {
    console.log(id.toFixed(2));
    return;
  }
  return;
}

type Admin = { role: "admin"; permissions: string[] };

type Vendor = { role: "user"; products: string[] };

type Rider = { role: "rider"; dispatch: string[] };

function checkRole(role: Admin | Vendor | Rider) {
  if ("products" in role) {
    console.log(role.products);
  } else if ("permissions" in role) {
    console.log(role.permissions);
  } else {
    console.log(role.dispatch);
  }
  return;
}

//union of arrays and array of union.

type ArrayOfUnion = (string | number)[];

type UnionOfArrays = string[] | number[];

type somethingTricky = [string | number];

const arrayOfUnions: ArrayOfUnion = ["1", 2, 1, 3, "3"];

const unionOfArrays: UnionOfArrays =
  Math.random() > 0.1 ? ["1", "2", "3"] : [2, 2, 2, 2];

const stringOrNumberArray: somethingTricky = Math.random() > 0.1 ? [2] : ["1"];
