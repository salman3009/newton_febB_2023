import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Library from './pages/Library';
import Navbar from './components/Navbar';
import { useUser } from './providers/UserProvider';

function App() {
   
  const {getToken} = useUser();

  function ProtectedRoute({children}){
     if(getToken){
       return children;
     }
     else{
        return <Navigate to="/login"/>
     }
      
  }
  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/library" element={
        <ProtectedRoute>
           <Library/>
        </ProtectedRoute>
       }/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
