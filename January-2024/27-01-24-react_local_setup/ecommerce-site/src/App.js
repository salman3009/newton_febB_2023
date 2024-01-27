import React from 'react'
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Favorites from './components/Favorites';

const App = () => {
  return (
    <div id="main">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/:id' element={<SingleProduct />}/>
          <Route path='/favorites' element={<Favorites />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
