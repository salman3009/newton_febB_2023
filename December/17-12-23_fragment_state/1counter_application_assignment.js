import React from 'react';
import {useState} from 'react';

function Counter(){

  const[getCounter,SetCounter] = useState(0);


  const incrementHandler=()=>{
    SetCounter(getCounter+1);
  }

  const decrementHandler=()=>{
     SetCounter(getCounter-1);
  }


  return (<>
    <h1>{getCounter}</h1>
    <button onClick={incrementHandler}>Increment</button>
    <button onClick={decrementHandler}>Decrement</button>
  </>)
}

export default Counter;
