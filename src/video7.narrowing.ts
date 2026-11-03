console.log("Hello from video7.narrowing.ts");

//* "typeof"
let num = 19;
if (typeof num === "number") {
  console.log(`${num} is a number`);
} else {
  console.log(`${num} is not a number`);
}

//* Type Guard 

const printId = (id: number | string) => {
  if (typeof id === "string") {
    return id.toUpperCase();
  } else if (typeof id === "number") {
    return id.toFixed(2);
  } else {
    return "Invalid ID";
  }
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
} | null;

const user: User = {
  name: "Taifur Rahman",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
};

const printUserAddress = (user: User) => {
  if (user && user.address) {
    console.log(
      `User address: ${user.address.street}, ${user.address.city}, ${user.address.zipCode}`,
    );
  } else {
    console.log("User is null");
    return "User is null";
  }
};
console.log(printUserAddress(user));

printUserAddress(user);

//<--------from video 8 ---------->

//* Equality narrowing

const compareValues = (a: number | string, b: number | string) => {
  if (a === b) {
    console.log(`${a} and ${b} are equal`);
  } else {
    console.log(`${a} and ${b} are not equal`);
  }
  return a === b;
};

console.log(compareValues(10, 10));
console.log(compareValues("hello", "world"));
console.log(compareValues(10, "10"));

//* "in" operator narrowing

type Bird = {
  fly: () => void;
  layEggs: () => void;
};

type Fish = {
  swim: () => void;
  layEggs: () => void;
};

const printAnimalBehavior = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
  }
  if ("swim" in animal) {
    animal.swim();
  }
  return animal.layEggs();
};

printAnimalBehavior({
  fly: () => console.log("Bird is flying"),
  layEggs: () => console.log("Bird is laying eggs"),
});

//* "instanceof" narrowing

const printDate = (date: Date | string) => {
  if (date instanceof Date) {
    console.log(`Date is: ${date.toDateString()}`);
  } else {
    console.log(`Date is: ${date}`);
  }
  return date instanceof Date ? date.toDateString() : date;
};
printDate(new Date());
printDate("2023-10-10");

//* Discriminated Union narrowing

interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

const getArea = (shape: Square | Circle) => {
  switch (shape.kind) {
    case "square":
      return shape.size ** 2;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
};
console.log(getArea({ kind: "square", size: 5 }));
console.log(getArea({ kind: "circle", radius: 3 }));
