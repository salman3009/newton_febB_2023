
import {useState} from 'react';
import { useConsumer } from '../AuthContext';
const login =()=>{
     const [getName,setName] = useState(null);
     const name = useConsumer();


     const onChangeHandler=(event)=>{
        setName(event.target.value);
     }

     return (<>
        <h1>Login Component</h1>
        <input type="text" onChange={onChangeHandler}/>
        <h2>Name Display:{getName}</h2>
        <h3>{name}</h3>
       </>)
}

export default login;