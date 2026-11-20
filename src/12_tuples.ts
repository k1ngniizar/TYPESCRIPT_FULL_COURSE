// tuples are arrays that have a fixed length and fix type at each index.
type FixedArray = [string, number];

const tupleArray: FixedArray = ["Ebenezer", 24]; //✅

// const tupleArray: FixedArray = ["ebenezer"] ❌
// const tupleArray: FixedArray = [2] ❌
// const tupleArray: FixedArray = [2, "ebenezer"] ❌

//Optional Tuples

type OptionalTuple = [string, number, boolean?];

const optionalTuple: OptionalTuple = ["Eben", 100, true]; //✅
const optionalTuple1: OptionalTuple = ["Eben", 100]; //✅
// const optionalTuple2 : OptionalTuple = [ 100, true]; ❌

type OptionalUserTuple1 = [name: string, username?: string];
const optionalUserTuple: OptionalUserTuple1 = ["Eben", "k1ng"];
