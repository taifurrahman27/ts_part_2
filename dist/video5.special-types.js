console.log("Hello from video5.special-types.ts");
//* Top types
let x = 10;
x = "Hello";
x = true;
x = { name: "Taifur Rahman" };
console.log(x);
const y = 10;
// y = "Hello"; // Error: Type 'string' is not assignable to type 'unknown'.
console.log(y);
//* Core types
const a = 19;
const b = "Hello";
const c = true;
console.log(a, b, c);
//* Nullish types
const currentUser = null;
if (currentUser) {
    console.log(`Current user: ${currentUser}`);
}
else {
    console.log("No current user.");
}
const loggedInUser = {
    name: "Taifur Rahman",
    age: 30
};
console.log(loggedInUser);
//*Unit types
const logMessage = (message) => {
    console.log(message);
};
console.log(logMessage("Hello from logMessage function"));
//* Sub-types of unit types
const anotherLogMessage = (message) => {
    console.log(message);
    return undefined;
};
anotherLogMessage("Hello from anotherLogMessage function");
;
//* Bottom types
let neverHappening;
// neverHappening = 10; // Error: Type 'number' is not assignable to type 'never'.
// neverHappening = "Hello"; // Error: Type 'string' is not assignable to type 'never'.
// neverHappening = true; // Error: Type 'boolean' is not assignable to type 'never'.   
const throwError = (message) => {
    throw new Error(message);
};
export {};
// console.log(throwError("This is a never type error"));
