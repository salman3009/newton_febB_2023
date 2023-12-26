import React from 'react';

const App = () => {

  let custom={
    backgroundColor:"red",
    color:"white",
    padding:"10px",
    borderRadius:"5px"
  }

  return (
   
    <button style={custom}>
      Click Me
    </button>
  );
};

export default App;
