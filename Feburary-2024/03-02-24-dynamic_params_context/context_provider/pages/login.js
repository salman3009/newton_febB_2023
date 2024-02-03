
import {useState} from 'react';

const login =()=>{
     const [getName,setName] = useState(null);

     const onChangeHandler=(event)=>{
        setName(event.target.value);
     }

     return (<>
        <h1>Login Component</h1>
        <input type="text" onChange={onChangeHandler}/>
        <h2>Name Display:{getName}</h2>
       </>)
}

export default login;