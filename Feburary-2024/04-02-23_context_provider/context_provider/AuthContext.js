import { createContext, useContext,useState } from "react";

const AuthDetails = createContext();


//consume data in the component
export const useConsumer = ()=>{
     return useContext(AuthDetails);
}

export const AuthContext = (props) => {

   const[getName,setName] = useState('no data');

   const setNameHandler=(event)=>{
          setName(event.target.value);
   }
  //provide data in the component
  return <>
    <AuthDetails.Provider value={{getName,setNameHandler}}>
      {props.children} 
    </AuthDetails.Provider>

  </>
}