type Appliance = {
  name: string;
  isGadget: boolean;
  inStock: boolean;
  waranty: Date;
};

type Edibles = {
  name: string;
  isFood: boolean;
  inStock: boolean;
  expiresAt: Date;
};

type Product = Appliance | Edibles;

function detectProduct(x: Product) {
  if ("isGadget" in x) {
    return `Product ${x.name} is a gadget.`;
  }

  if ("isFood" in x) {
    return `Product ${x.name} is a food.`;
  }

  return "Unknown product type.";
}

const phone: Appliance = {
  name: "spark",
  isGadget: true,
  inStock: false,
  waranty: new Date(),
};

console.log("Product:: ", detectProduct(phone));
console.log(
  "Product:: ",
  detectProduct({
    isFood: true,
    inStock: true,
    name: "Iphone",
    expiresAt: new Date(),
  }),
);

//optional
type User = {
  name: string;
  username?: string;
  address?: {
    street: string;
    country?: string;
    state: string;
  };
};

const user: User = { name: "Eben", username: "k1ng" };
const myData: User = {
  name: "Eben",
  address: {
    street: "Island",
    state: "Nigeria",
  },
};

const name = user.username;
const name2 = myData.username;
const country = myData.address?.country;
const street = user.address?.street;

//Nullish
// ?? -> null or undefined
// || -> falsy

const checkNull: null | undefined | number = 0;
const checkFalsy: string | undefined = "";

const isNull = checkNull ?? 0; // This returns the default value only if checkNull is null or undefined

const isFalsy = checkFalsy || "Default"; // This returns the default value if checkFalsy is a falsy value like 0, "", null, undefined, false, []...
