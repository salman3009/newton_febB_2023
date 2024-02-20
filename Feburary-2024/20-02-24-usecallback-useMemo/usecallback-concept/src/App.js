import './App.css';
import {useCallback, useState} from 'react';
import List from './List';
import Profile from './Profile';
function App() {
  const[getCount,setCount] = useState(0);
  const [getName,setName] = useState('');
  const [getSalary,setSalary] = useState(0);

  const onClickHandler=()=>{
      setCount(getCount+1);
   }

   const onChangeHandler =(e)=>{
     setName(e.target.value);
   }

   const onSalaryHandler=useCallback(()=>{
      setSalary((previous)=>previous+1);
   },[])

  return (
    <div className="App">
      <List count={getCount}/>
      <button onClick={onClickHandler}>Click Count</button>
      <h1>UserName: {getName}</h1>
      <input type="text" onChange={onChangeHandler}/>
      <h1>Current Salary:{getSalary}</h1>
      <Profile click={onSalaryHandler}/>
    </div>
  );
}

export default App;
