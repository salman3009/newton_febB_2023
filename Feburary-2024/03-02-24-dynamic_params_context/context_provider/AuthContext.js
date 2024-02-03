import { createContext, useContext } from "react";

const AuthDetails = createContext();


//consume data in the component
export const useConsumer = ()=>{
     return useContext(AuthDetails);
}

export const AuthContext = ({ children }) => {

  //provide data in the component
  return <>
    <AuthDetails.Provider value={"dummy data"}>
      {children}
    </AuthDetails.Provider>

  </>
}