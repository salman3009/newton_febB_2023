import React, { useState } from 'react';
import '../styles/App.css';


const App = () => {
  
  const[getFlag,setFlag] = useState(false);

   const statusButtonHandler=()=>{
    setFlag(!getFlag);
   }
    return (
        <div className="app">
           <h1>Toggle Text</h1>
           <button onClick={statusButtonHandler}>Show Text</button>
           {getFlag && <p className="text">This is the hidden text</p>}
        </div>
    );
};

export default App;
