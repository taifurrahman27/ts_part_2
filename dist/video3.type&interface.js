//*type alias vs interface
//? Interface is generally used to define the shape of an object
//? while type alias can be used to define any type, including primitive types, union types, and intersection types.
console.log("Hello from video3.type&interface.ts");
const user = {
    id: 1,
    name: "Taifur Rahman",
    age: 30,
    role: "editor"
};
console.log(user);
const dog = {
    species: "Canis lupus familiaris",
    habitat: "Domestic",
    hasFur: true,
    breed: "Labrador Retriever"
};
console.log(dog);
const myCar = {
    brand: "Toyota",
    model: "Camry"
};
console.log(myCar);
export {};
// type can not be redefined, but interface can be redefined and merged.    
