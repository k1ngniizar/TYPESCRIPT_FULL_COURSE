type Person1 = {
  id: string;
  name: string;
  salary: number;
};

const person: Person1 = {
  id: "uid1",
  name: "Eben",
  salary: 123456,
};

type Paid = {
  isPaid: boolean;
};

type IsPersonPaid = Person1 & Paid;

interface Person2 {
  id: string;
  name: string;
  salary: number;
}

interface IsDue extends Person2 {
  isDue: boolean;
}

const isPersonPaid: IsPersonPaid = {
  id: "uidPP",
  name: "Eben Paid",
  salary: 123456,
  isPaid: true,
};

const isPersonDue: IsDue = {
  id: "uidPP",
  name: "Eben Paid",
  salary: 123456,
  isDue: true,
};

interface Status {
  myStatus: "new" | "old";
}

type Stat = "new" | "old";

const checkStatus = (s: Status) => {
  return s.myStatus;
};

const checkStat = (s: Stat) => {
  return s;
};

checkStatus({ myStatus: "new" });
checkStat("new");
