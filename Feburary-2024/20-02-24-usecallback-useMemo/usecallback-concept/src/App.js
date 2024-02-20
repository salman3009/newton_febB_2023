import './App.css';
import {useState} from 'react';
import List from './List';

function App() {
  const[getCount,setCount] = useState(0);
  const [getName,setName] = useState('');

  const onClickHandler=()=>{
      setCount(getCount+1);
   }

   const onChangeHandler =(e)=>{
     setName(e.target.value);
   }

  return (
    <div className="App">
      <List count={getCount}/>
      <button onClick={onClickHandler}>Click Count</button>
      <h1>UserName: {getName}</h1>
      <input type="text" onChange={onChangeHandler}/>
    </div>
  );
}

export default App;
