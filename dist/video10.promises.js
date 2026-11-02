console.log("Hello from video10.promises.ts");
;
;
const fetchUser = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        return data;
    }
    catch (error) {
        throw new Error("Failed to fetch user");
    }
};
const user = fetchUser();
user.then((data) => {
    console.log(data);
});
export {};
