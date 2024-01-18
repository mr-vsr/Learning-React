import React from "react";
import UserContext from "./UserContext";

//This is the provider for the user context which will be making the states which is required .
//Children are the variables/states/jsx element which can be used to get the values.
const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
//In the value field we are passing the user variable and setUser method
//This is the jsx element which will be rendered here
export default UserContextProvider