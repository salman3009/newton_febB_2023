import React from 'react'
import '../styles/App.css';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>{props.firstLink}</li>
        <li>{props.secondLink}</li>
        <li>{props.thirdLink}</li>
      </ul>
    </nav>
  )
}

const App = () => {

  return (
    <div id="main">
      <Nav firstLink="Home" secondLink="Price" thirdLink="About Us"/>
    </div>
  )
}


export default App;
