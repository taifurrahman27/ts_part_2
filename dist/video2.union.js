// console.log("Hello from video2.union.ts");
const greetings = () => {
    console.log("Hello, Taifur Rahman");
};
greetings();
const status = "pending";
console.log(status);
const userStatus = "active";
console.log(userStatus);
const userRole = "editor";
console.log(userRole);
// type User = {
//     name: string;
//     age: number;
//     role: "admin" | "editor" | "viewer";
// };
// const user: User = {
//     name: "Taifur Rahman",
//     age: 30,
//     role: "editor"
// };
const user = {
    name: "Taifur Rahman",
    age: 30,
    role: "admin",
    privileges: ["create", "read", "update", "delete"]
};
console.log(user);
export {};
