import { createContext, useContext, useState,useEffect} from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = (props) => {

    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(()=>{
      const token = localStorage.getItem("token");
       if(token){
        setLoggedIn(true);
       }
    },[])

    const login = (token) => {
        localStorage.setItem('token', token);
        setLoggedIn(true);
    }

    const logout = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
    }

    return (<AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {props.children}
    </AuthContext.Provider>)
}