import React from 'react'
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom";
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {

  return (
    <div id="main">
      <Router>
         <Routes>
           <Route path="/" element={<LoginForm/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
         </Routes>
      </Router>
    </div>
  )
}


export default App;
