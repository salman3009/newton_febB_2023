import {useState,useMemo} from 'react';

function factorial(n){
  console.log("factorial",n);
  if(n<=1){
      return 1;
  }
  return n*factorial(n-1);
}

function App() {
  const [getNum,setNum] = useState(5);
  const [getFact,setFact] = useState(0);

  const onClickHandler=()=>{
     setFact(Number(getNum));
  }

 let result = useMemo(()=>factorial(getFact),[getFact]);

  return (
    <div className="App">
    Factorial Number: {result}
     Factorial Number:<input type="number" onChange={(e=>setNum(e.target.value))}/>
     <br/>
     <button onClick={onClickHandler}>Set Factorial</button>

    </div>
  );
}

export default App;
