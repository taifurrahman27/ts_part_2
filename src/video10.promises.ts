console.log("Hello from video10.promises.ts");

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
};

interface ApiResponse<T> {
    status: number;
    success: boolean;
    data: T;
};


const fetchUser =async (): Promise<User>=>{
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data: User = await res.json() as ApiResponse<User>["data"];
        return data;
    } catch (error) {
        throw new Error("Failed to fetch user");
    }          
}; 

const user = fetchUser();
user.then((data)=>{
    console.log(data);
});

