import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home(){
 
      const navigate = useNavigate();
     useEffect(()=>{
        const isLoggedIn = localStorage.getItem("loginStatus");
       if(isLoggedIn !='true'){
           navigate('/login');
       }
     },[])


     const onLogoutHandler=()=>{
          localStorage.removeItem("loginStatus");
          navigate('/login');
     }


     return (<>
      <h1>Home</h1>
      <button onClick={onLogoutHandler}>Logout Button</button>
     </>)
}
export default Home;