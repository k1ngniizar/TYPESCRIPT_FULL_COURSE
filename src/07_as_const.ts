const ROLES = ["admin", "user", "operator"] as const;

type Role = (typeof ROLES)[number];

type User = {
  name: string;
  role: Role;
};

const user: User = {
  name: "Ebenezer",
  role: "admin",
};

function setRole(role: Role) {
  console.log(role);
}

setRole("admin");
