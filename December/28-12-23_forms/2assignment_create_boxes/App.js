import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleCreateBox = () => {
    const newBox = document.createElement("div");
    newBox.style.width = `${width}px`;
    newBox.style.height = `${height}px`;
    newBox.style.backgroundColor = backgroundColor;
    document.getElementById("box-container").appendChild(newBox);
    setWidth("");
    setHeight("");
    setBackgroundColor("");
  };

  return (
    <div id="main">
      <h1>Box Creator</h1>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="text"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <button onClick={handleCreateBox} className='create-btn'>Create Box</button>
      <div id="box-container"></div>
    </div>
  );
};


export default App;
