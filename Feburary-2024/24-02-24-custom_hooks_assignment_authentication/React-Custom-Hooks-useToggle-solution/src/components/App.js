import React,{useCallback,useState} from 'react'
import '../styles/App.css';
import useToggle from './useToggle.js'
const App = () => {

  

    const [isTextChanged, setIsTextChanged] = useToggle();

  return(
        <button id='button' onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
    );
}


export default App;
