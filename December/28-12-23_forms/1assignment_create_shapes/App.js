import React,{useState} from 'react'

import './index.css';

export const App = () => {

const [getselected,setSelected] = useState('Square');
const [getList,setList] = useState([]);

const onChangeHandler=(event)=>{
      console.log(event.target.value);
      setSelected(event.target.value); 
} 

const handleAddShape=()=>{
  const list =[...getList,getselected.toLowerCase()];
  setList(list); 
}

return (

<div id="main">

<div id="shape-creator">
  <select onChange={onChangeHandler} value={getselected}>
    <option>Square</option>
    <option>Circle</option>
  </select>
  <button onClick={handleAddShape}>Add Shapes</button>
</div>

<div id="shapes-holder">
    {getList.map((obj,index)=>{
         return (<div className={obj} key={index}>{index}</div>)
    })}

</div>
</div>)
}

