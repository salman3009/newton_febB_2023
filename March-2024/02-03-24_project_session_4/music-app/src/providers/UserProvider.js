import { createContext,useContext,useState } from "react";

const UserContext = createContext();


export const UserProvider = ({children})=>{
    
    const [getToken,setToken] = useState(sessionStorage.getItem('token'));
    const [getName,setName] = useState(sessionStorage.getItem('name'));

    const onTokenHandler=(data)=>{
          setToken(data);
          sessionStorage.setItem('token',data);
    }

    const onNameHandler=(data)=>{
          setName(data);
          sessionStorage.setItem('name',data);
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