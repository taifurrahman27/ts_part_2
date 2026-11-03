console.log("Hello from video5.special-types.ts");

//* Top types
let x: any = 10;
x = "Hello";
x = true;
x = { name: "Taifur Rahman" };
console.log(x);

const y: unknown = 10;
// y = "Hello"; // Error: Type 'string' is not assignable to type 'unknown'.
console.log(y);

//* Core types
const a: number = 19;
const b: string = "Hello";
const c: boolean = true;

console.log(a, b, c);

//* Nullish types
const currentUser: string | null = null;
if (currentUser) {
  console.log(`Current user: ${currentUser}`);
} else {
  console.log("No current user.");
}

interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

type LoggedInUser = User | null;
const loggedInUser: LoggedInUser = {
  name: "Taifur Rahman",
  age: 30,
};
console.log(loggedInUser);

//* Unit types
const logMessage = (message: string): void => {
  console.log(message);
};
console.log(logMessage("Hello from logMessage function"));

//* Sub-types of unit types
const anotherLogMessage = (message: string): undefined => {
  console.log(message);
  return undefined;
};

anotherLogMessage("Hello from anotherLogMessage function");

//* Bottom types
let neverHappening: never;
// neverHappening = 10; // Error: Type 'number' is not assignable to type 'never'.
// neverHappening = "Hello"; // Error: Type 'string' is not assignable to type 'never'.
// neverHappening = true; // Error: Type 'boolean' is not assignable to type 'never'.

const throwError = (message: string): never => {
  throw new Error(message);
};

// console.log(throwError("This is a never type error"));


