import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("red");

    return (<ThemeContext.Provider value={{theme}}>
        {children}
    </ThemeContext.Provider>)
}