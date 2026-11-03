console.log("Hello from video8.generic.ts");

const wrapInArray = (value: any) => {
  return [value];
};

console.log(wrapInArray(5));
console.log(wrapInArray("Hello"));

/** Generic Type */
const wrapInArrayGeneric = <T>(value: T): T[] => {
  return [value];
};

console.log(wrapInArrayGeneric<number>(5));
console.log(wrapInArrayGeneric<string>("Hello"));

// Another example of generic type
interface User {
  name: string;
  age: number;
  email: string;
}

interface Blog {
  title: string;
  content: string;
}

interface ApiResponse<T> {
  status: number;
  success: boolean;
  data: T;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userResponse: UserResponse = {
  status: 200,
  success: true,
  data: {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  },
};
console.log(userResponse);

const blogResponse: BlogResponse = {
  status: 200,
  success: true,
  data: {
    title: "My Blog Post",
    content: "This is the content of my blog post.",
  },
};
console.log(blogResponse);
