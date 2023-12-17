import React, { useState } from 'react';


function App() {

  const [getName, setName] = useState('John Doe');
  const [getMobileNo, setMobileNo] = useState('9876543210');
  const [getPosition, setPosition] = useState('Manager');
  const [getAge, setAge] = useState(34);

  const ageHandler=()=>{
    setAge(getAge+1);
  }

  return (
    <div>
    <h1>Hello, my name is {getName} and my contact number is {getMobileNo}</h1>
    <p>
    I am {getAge} years old and I am working here as {getPosition}
    </p>
    <button onClick={ageHandler}>Increase Age</button>
    </div>
  );
}

export default App;