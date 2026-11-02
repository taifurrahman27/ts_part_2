//*type alias vs interface

//? Interface is generally used to define the shape of an object
//? while type alias can be used to define any type, including primitive types, union types, and intersection types.

console.log("Hello from video3.type&interface.ts");

type ID= number;

type role = "admin" | "editor" | "viewer";

interface User {
    id: ID;
    name: string;
    age: number;
    role: role;
}

const user: User = {
    id: 1,
    name: "Taifur Rahman",
    age: 30,
    role: "editor"
};

console.log(user);




//TODO:interface

interface animal {
    species: string;
    habitat: string;
}

interface mammal extends animal {
    hasFur: boolean;
    breed: string;
}

const dog: mammal = {
    species: "Canis lupus familiaris",
    habitat: "Domestic",
    hasFur: true,
    breed: "Labrador Retriever"
};

console.log(dog);

type vehicle = {
    brand: string;
}

type car = {
    model: string;

}

const myCar: vehicle & car = {  // "&" is the intersection type to combine vehicle and car types
    brand: "Toyota",
    model: "Camry"
};  

console.log(myCar);

// type can not be redefined, but interface can be redefined and merged.    
