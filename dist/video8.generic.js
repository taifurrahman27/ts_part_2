console.log("Hello from video8.generic.ts");
const wrapInArray = (value) => {
    return [value];
};
console.log(wrapInArray(5));
console.log(wrapInArray("Hello"));
/**Generic Type */
const wrapInArrayGeneric = (value) => {
    return [value];
};
console.log(wrapInArrayGeneric(5));
console.log(wrapInArrayGeneric("Hello"));
;
;
const userResponse = {
    status: 200,
    success: true,
    data: {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    }
};
console.log(userResponse);
const blogResponse = {
    status: 200,
    success: true,
    data: {
        title: "My Blog Post",
        content: "This is the content of my blog post."
    }
};
console.log(blogResponse);
export {};
