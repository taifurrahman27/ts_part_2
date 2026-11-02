console.log("Hello from video6.type-assertion.ts");

//* Type Assertion
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
console.log(`The length of the string is: ${strLength}`);   



//* "as" syntax
let anotherValue: unknown = "TypeScript is awesome!";
let anotherStrLength: number = (anotherValue as string).length;
console.log(`The length of the string is: ${anotherStrLength}`);    



//* non-null assertion operator
interface Config{
    port?: number;
    host?: string;  
};

const config: Config = {
    port: 8080,
    host: "localhost"
};

const port: number = config.port!;
console.log(`The port is: ${port}`);

// Using non-null assertion operator to assert that the element is not null



//* constant assertion
const myString = "Hello, TypeScript!" as const;
const myNumber = 42 as const;
const myBoolean = true as const;    

console.log(myString, myNumber, myBoolean);
