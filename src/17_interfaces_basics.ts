//Interface simply means a name shape for objects.

interface User {
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

const user: User = {
  id: "uid0",
  name: "Eben",
  email: "eben@gmail.com",
  createdAt: new Date(),
}; //✅

const user1: User = {
  id: "uid1",
  name: "Eben1",
  createdAt: new Date(),
};

//extending interface
interface Admin extends User {
  permission: boolean;
}

const admin: Admin = {
  id: "uidAD",
  name: "Eben Admin",
  permission: true,
  createdAt: new Date(),
};

interface SuperAdmin extends Admin {
  isSuperAdmin: true;
}

const isSuperAdmin: SuperAdmin = {
  id: "uidSA",
  name: "Eben Super",
  permission: true,
  createdAt: new Date(),
  isSuperAdmin: true,
};

interface SomeInterface {
  related: boolean;
}

interface Multiple extends User, SomeInterface {}

const multiple: Multiple = {
  id: "uidMUL",
  name: "Multiple",
  email: "multiple@gmail.com",
  createdAt: new Date(),
  related: true,
};
