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
