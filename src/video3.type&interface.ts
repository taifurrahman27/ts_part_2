//* Type alias vs interface

//? Interface is generally used to define the shape of an object
//? while type alias can be used to define any type, including primitive types, union types, and intersection types.

console.log("Hello from video3.type&interface.ts");

type ID = number;

type Role = "admin" | "editor" | "viewer";

interface User {
  id: ID;
  name: string;
  age: number;
  role: Role;
}

const user: User = {
  id: 1,
  name: "Taifur Rahman",
  age: 30,
  role: "editor",
};

console.log(user);

// TODO: Interface

interface Animal {
  species: string;
  habitat: string;
}

interface Mammal extends Animal {
  hasFur: boolean;
  breed: string;
}

const dog: Mammal = {
  species: "Canis lupus familiaris",
  habitat: "Domestic",
  hasFur: true,
  breed: "Labrador Retriever",
};

console.log(dog);

type Vehicle = {
  brand: string;
};

type Car = {
  model: string;
};

const myCar: Vehicle & Car = {
  brand: "Toyota",
  model: "Camry",
};

console.log(myCar);

// type can not be redefined, but interface can be redefined and merged.    
