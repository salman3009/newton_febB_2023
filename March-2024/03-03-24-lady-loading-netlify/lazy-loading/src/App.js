import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {lazy} from 'react';

// import Login from './Login';
// import Register from './Register';
// import Home from './Home';

const Login = lazy(()=>import('./Login'));
const Register = lazy(()=>import('./Register'));
const Home = lazy(()=>import('./Home'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
