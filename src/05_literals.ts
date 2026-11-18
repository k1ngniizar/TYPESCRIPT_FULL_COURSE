type Directions = "left" | "right" | "up" | "down";

function move(direction: Directions): string {
  return direction;
}
//example
const down = "down";
console.log(move(down));

let up = "up";
console.log(move(up)); // TS warning because the variable up can be reassigned.

let left: Directions = "left";
console.log(move(left)); // Easy fix is to give the varaible a type equivalent.
