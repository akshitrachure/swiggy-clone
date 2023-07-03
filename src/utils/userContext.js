import { createContext } from "react";

const userContext = createContext({
    userDetails:{
        name: "Dummy Name",
        email: "dummyemail@gmail.com"
    }
});

export default userContext;