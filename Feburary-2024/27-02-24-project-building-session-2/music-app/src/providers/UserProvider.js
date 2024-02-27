import { createContext,useContext,useState } from "react";

const UserContext = createContext();


export const UserProvider = ({children})=>{
    
    const [getToken,setToken] = useState(null);
    const [getName,setName] = useState(null);

    const onTokenHandler=(data)=>{
          setToken(data);
    }

    const onNameHandler=(data)=>{
          setName(data);
    }

    const object={
        getToken,
        getName,
        onTokenHandler,
        onNameHandler
    }


    return (<div>
         <UserContext.Provider value={object}>
               {children}
         </UserContext.Provider>
    </div>)
}

export function useUser(){
    return useContext(UserContext);
}