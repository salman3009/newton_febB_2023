import { createContext, useContext,useState} from 'react';

const AuthContext = createContext();

export const useAuth=()=>{
     return useContext(AuthContext);
}

export const AuthProvider = (props) => {

    const[isLoggedIn,setLoggedIn] = useState(false);

    const login=(token)=>{
         localStorage.setItem('token',token);
         setLoggedIn(true);
    }

    const logout=()=>{
     localStorage.removeItem("token");
     setLoggedIn(false);
    }

    return (<AuthContext.Provider value={{isLoggedIn,login,logout}}>
        {props.children}
    </AuthContext.Provider>)
}