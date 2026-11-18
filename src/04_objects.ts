// OBJECT TYPES
// Object types are used to type the structure of an object. They can have different values such as: required, optional, readonly etc.

type User = {
  id: string;
  name: string;
  email?: string; //The question mark right after the object key identicates that the value is optional and can be omitted from the object.
  readonly createdAt: Date; //This represents a value that shouldn't and cannot be changed.
};

// EXAMPLE 1
const user_1: User = {
  id: "u1",
  name: "Ebenezer",
  createdAt: new Date(),
};
//EXAMPLE 2
const user_2: User = {
  id: "u2",
  name: "West",
  email: "west@gmail.com",
  createdAt: new Date(),
};

// WRONG EXAMPLE
// const user_3: User = {
//   Required values must be present at all times.

//   name: "West",
//   email: "west@gmail.com",
//   createdAt: new Date(),
// };

//RECORD
type Engagement = Record<"views" | "likes" | "shares", number>;

type Engagement1 = {
  views: number;
  likes: number;
  shares: number;
};

//EAMPLE
const engagementConut: Engagement = {
  views: 3,
  likes: 4,
  shares: 1,
};

//INDEX SIGNATURE
type Whatever = { [k: string]: number };
//EXAMPLE
const whateverValue: Whatever = { whateverKey: 5 };
