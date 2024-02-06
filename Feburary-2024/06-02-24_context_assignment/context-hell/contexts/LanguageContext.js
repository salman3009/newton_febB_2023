import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
    return useContext(LanguageContext);
}

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState("en");

    return (<LanguageContext.Provider value={{language}}>
        {children}
    </LanguageContext.Provider>)
}