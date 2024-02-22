import {useState} from 'react';

function useToggle(){
   const [state,setState] = useState(false);
   const toggle = ()=>{
     setState(!state);
   }
   return [state,toggle];
}

export default useToggle;