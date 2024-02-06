import { createContext,useContext,useState } from "react";

const LanguageContext = createContext();

export const useLanguage=()=>{
    return useContext(LanguageContext);
}

export const LanguageProvider=(props)=>{

      const [languge,setLanguage]=useState('en');

      const setLanguageHandler=(event)=>{
        setLanguage(event.target.value);
      }

 
     return(<LanguageContext.Provider value={{languge,setLanguageHandler}}>
        {props.children}
     </LanguageContext.Provider>)
}