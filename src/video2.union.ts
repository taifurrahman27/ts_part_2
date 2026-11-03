// console.log("Hello from video2.union.ts");

const greetings = () => {
  console.log("Hello, Taifur Rahman");
};
greetings();

//* Literal Types
type Status = "pending";
const status: Status = "pending";
console.log(status);

//* Basic Union Types
type UserStatus = "active" | "inactive" | "banned";
const userStatus: UserStatus = "active";
console.log(userStatus);

//* Literal Union Types
type UserRole = "admin" | "editor" | "viewer";
const userRole: UserRole = "editor";
console.log(userRole);

//* Object Union Types
type Admin = {
  name: string;
  age: number;
  role: "admin";
  privileges: string[];
};

type Member = {
  name: string;
  age: number;
  role: "editor" | "viewer";
  plan: "free" | "premium";
};

type UserUnion = Admin | Member;

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

const user: UserUnion = {
  name: "Taifur Rahman",
  age: 30,
  role: "admin",
  privileges: ["create", "read", "update", "delete"],
};

console.log(user);

