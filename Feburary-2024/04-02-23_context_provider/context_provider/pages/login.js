
import {useState} from 'react';
import { useConsumer } from '../AuthContext';
const login =()=>{
    
     const {getName,setNameHandler} = useConsumer();

     return (<>
        <h1>Login Component</h1>
        <input type="text" onChange={setNameHandler}/>
        <h3>{getName}</h3>
       </>)
}

export default login;