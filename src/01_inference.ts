// NOTE:
//TYPESCRIPT knows the JAVASCRIPT language very well and will infer (AUTOMATICALLY TYPE) most of the JavaScript code you write.

// Example
let count = 3; //ts knows that this value is a number and if you try to assign it to string later, typescript warns you that the variable is supposed to be of type number.
// let count = 3 and let count:number = 3 is the same as typescript infers the first one.

// UNDERSTANDING ANNOTATION
// Over annotation isn't bad, it is just noisy
//We should annotate when the type is not obvious

//EXAMPLE
function add(a: number, b: number): number {
  return a + b;
}

//OR

let stringOrNumber: string | number;
const randomNumber = Math.random(); // infer by ts as number
stringOrNumber = randomNumber > 0 ? "text" : randomNumber;
