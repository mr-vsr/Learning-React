import { createContext, useContext } from "react";


//Here we are creating a object which will be available wherever called 
//The objects contain themeMode which will be set to light or dark wherever it will be used .......similarly we have two methods darkTheme and lightTheme which is not yet defined and thus will be defined wherever required
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => {},
})

//Here we are creating the provider for the above context
export const ThemeProvider = ThemeContext.Provider
//We don't have anything to return in form of jsx therefore this is another method in which we can use context api.
//Here we  are creating a function which will return the context whenever called
export default function useTheme() {
    return useContext(ThemeContext)
}