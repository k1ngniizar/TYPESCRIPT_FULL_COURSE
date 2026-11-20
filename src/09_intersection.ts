type inter1 = { id: string };
type inter2 = { createdAt: Date };

type inter3 = inter1 & inter2;

const entity: inter3 = {
  id: "UID2",
  createdAt: new Date(),
};

type Product = {
  name: string;
};

type Product2 = {
  name: string;
};

type Product3 = {
  name: number;
};

const product: Product & Product2 = {
  name: "Eben",
};

// const product2 : Product & Product3 = {
//     name: 2,
// }; ❌❌❌❌
