// interface is best for object shapes that you want/expect to extend.
// Interfaces support declaration merging
// types are more general
// can not be reopened (no merging)

// /example declaration merging
interface Box1 {
  height: string;
}

interface Box1 {
  width: string;
}

const box: Box1 = {
  width: "100",
  height: "100",
}; // declaration merging in effect here as Box1 interface carries both height and width keys.

type Box2 = {
  width: string;
};

// type Box2 = {
//     height: string;
// } ❌❌❌ // error type Box2 can not be declared more than once
