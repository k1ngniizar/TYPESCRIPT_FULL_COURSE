//🚨⚠️Using the "any" type in typescript is not advisable;
//EXAMPLE
let confused: any;
confused = null;
confused = "Ebenezer";
confused = 2n ** 6n;
confused = Symbol("CONFUSED");
const isNotThere = confused.noThere;
//notice how this defeats the purpose of typescript?

// UNION TYPES
//This is the combination of 2 or more types to a particular varialble
// EXAMPLE
let subtitle: string | undefined;
subtitle = "I am Doom";
subtitle = undefined;
//Notice how there is no typescript warning?

//void: Is used when a function doesn't return a useful value
//EXAMPLE
function voidFn(): void {
  console.log(
    "I am a function of type void, because I do not return a useful value.",
  );
}

//never: Is used when a function doesn't return at all
// EXAMPLE
function neverFn(): never {
  throw new Error("I am a function that doesn't have a reachable end point");
}
