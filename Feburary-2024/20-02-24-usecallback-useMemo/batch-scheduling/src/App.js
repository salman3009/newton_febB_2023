import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

function App() {

  const [getCount,setCount] = useState(0);
  const [getSalary,setSalary] = useState(0);

  const onLoad=()=>{
     setCount(getCount+1);
     setSalary(getSalary+1);
  }

  useEffect(()=>{
     console.log("getCount,getSalary");
  },[getCount,getSalary])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Count:{getCount}</h1>
        <h1>Salary:{getSalary}</h1>
        <button onClick={onLoad}>Increment</button>
      </header>
    </div>
  );
}

export default App;
