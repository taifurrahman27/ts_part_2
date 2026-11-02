console.log("Hello from video7.narrowing.ts");

//* "typeof"
let num = 19;
if (typeof num === "number") {
    console.log(`${num} is a number`);
} else {
    console.log(`${num} is not a number`);
};



//* Type Guard 

const printId = (id: number | string) => {
    if (typeof id === "string") {
        return id.toUpperCase();
    }else if (typeof id === "number") {
        return id.toFixed(2);
    }else {
        return "Invalid ID";
    };
};

console.log(printId("abc123"));
console.log(printId(123.456));
console.log(printId(true as any));


//* Truthiness narrowing

type User = {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
        zipCode: string;
    };
}| null;

const user: User = {
    name: "Taifur Rahman",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    }
};

 const printUserAddress = (user: User) => {
    if (user && user.address) {
        console.log(`User address: ${user.address.street}, ${user.address.city}, ${user.address.zipCode}`);
       
    }else {
        console.log("User is null");
        return "User is null";
    };
 };
console.log(printUserAddress(user));

printUserAddress(user);




//* Equality narrowing



//* "in" operator narrowing



//* "instanceof" narrowing



//* Discriminated Union narrowing



