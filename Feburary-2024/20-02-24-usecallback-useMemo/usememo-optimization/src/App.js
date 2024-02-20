import logo from './logo.svg';
import './App.css';
import {useState,useMemo} from 'react';

function isPrime(num) {
  console.log("isPrime function");
  if (num == 0 || num == 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

function armStrong(num){
    console.log("armstrong function");
  let sum=0;
  let temp = num;
  let digits = num.toString().length;
  while(temp>0){
      let reminder = temp%10;
      sum+=reminder ** digits;
      temp = parseInt(temp/10);
  }
   
  return sum == num;
}

function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
   
  let prime = useMemo(()=>isPrime(num1),[num1]);
  let arm = useMemo(()=>armStrong(num2),[num2]);

  return (
    <div className="App">
      <h1>{num1 && prime? "Prime number":"no"}</h1>
      Prime Number check:<input type="text" onChange={(e)=>setNum1(e.target.value)}/>
      <br/>
      <h1>{num2 && arm?"Armstrong number":"no"}</h1>
      armstrong Number check:<input type="text" onChange={(e)=>setNum2(e.target.value)}/>
      <br/>
    </div> 
  );
}

export default App;
