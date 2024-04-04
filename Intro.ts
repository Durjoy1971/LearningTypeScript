// * Part - 01

let num: number = 5;
let s: string = "Durjoy";
let flag: boolean = true;

let direct_number = 10;
let direct_string = "Barua";
let direct_flag = false;

console.log(num, s, flag);
console.log(direct_number, direct_string, direct_flag);

// * Part - 02

function sum(a: number, b: number): number {
  return a + b;
}

function cat(a: string, b: string): string {
  return a + b;
}

console.log(sum(5, 6));
console.log(cat("Opy", " Barua").toUpperCase());

// * Part - 03

function catination(a: string, b: string = "barua"): string {
  return a + b;
}

console.log(catination("Opy").toUpperCase());
console.log(catination("Opy", " Barua"));

// ----------------------------------------------------

function optional(a: string, b?: string): string {
  if (!b) return a;
  else return a + b;
}

console.log(optional("Opy").toUpperCase());
console.log(optional("Opy", " Barua").toUpperCase());

// ----------------------------------------------------

const arrow = (a: string, b: string): string => a + b;

console.log(arrow("Opy", " Barua").toUpperCase());

// ----------------------------------------------------

const hero = [1, 2, "OKay"];

hero.map((index) => {
  if (typeof index === "number") return "Number : " + 2;
  else return "String " + index;
});

// ----------------------------------------------------

function fail(msg: string): never {
  throw new Error(msg);
}

// * Part - 04

function createUser({ names }: { names: string }) {
  console.log(names);
}
createUser({ names: "Durjoy" });

// ----------------------------------------------------

function createUsers({ names, age }: { names: string; age: number }): {
  names: string;
  age: string;
} {
  return { names: names + " Barua", age: age + " Years Old" };
}

console.log(createUsers({ names: "Durjoy", age: 15 }));

// ----------------------------------------------------

let User = {
  names: "Durjoy",
  age: 16,
  email: "S.com",
};

function withUsers({ names, age }: { names: string; age: number }): {
  names: string;
  age: string;
} {
  return { names: names + " Barua", age: age + " Years Old" };
}

console.log(withUsers(User));

// ----------------------------------------------------

type User = {
  name: String;
  age: number;
};

function createTypeUser(user: User) {
  // instead of user, we can use {name,age}
  console.log(user);
  // console.log(name,age);
}

createTypeUser({ name: "Opy", age: 22 });

// ----------------------------------------------------

type One = {
  readonly _id: string;
  name: string;
  isActive: boolean;
};

let nyUser: One = {
  _id: "12",
  name: "Durjoy",
  isActive: true,
};

/* nyUser._id = "13" ! Can't be changed */

nyUser.isActive = false;

// ----------------------------------------------------

type cardNumber = {
  id: String;
};

type cardAmount = {
  amount: number;
};

type card = cardNumber &
  cardAmount & {
    purchased: String;
  };

let myTypeUser: card = {
  id: "Durjoy",
  amount: 1200,
  purchased: "10-12-2024",
};

console.log(myTypeUser);

// * Part - 05

let score: number | string = 33;
score = "thirth five";

function myFunc(id: number | string): number | string {
  if (typeof id === "number") return "Number";
  else return id.length;
}

const data: (string | number)[] = ["1", 2, "3", 4];

let seatAllotment: "front" | "middle" | "end";

type Two = {
  name: string;
  price: number;
};

type Three = {
  userName: string;
};

type Four = Two | Three;

let MixedNumbers: Four = {
  userName: "Durjoy",
  price: 50,
};

// * Part - 06: Tuples

let tupleUser: [string, number, boolean];
tupleUser = ["true", 1100, false];

const tupleColor: [number, number, number] = [255, 122, 120];

type tupleObject = [number, string];

const tupleNewObject: tupleObject = [112, "dalley"];
