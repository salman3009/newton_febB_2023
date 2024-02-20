import {useState} from 'react';

import FactorialComponent from './FactorialComponent';
function App() {
  const [getNum,setNum] = useState(5);
  const [getFact,setFact] = useState(0);

  const onClickHandler=()=>{
     setFact(Number(getNum));
  }
  return (
    <div className="App">
     <FactorialComponent num={getFact}/>
     Factorial Number:<input type="number" onChange={(e=>setNum(e.target.value))}/>
     <br/>
     <button onClick={onClickHandler}>Set Factorial</button>

    </div>
  );
}

export default App;
