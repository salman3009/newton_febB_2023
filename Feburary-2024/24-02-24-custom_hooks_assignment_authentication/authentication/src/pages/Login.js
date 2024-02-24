import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Login(){

    const [getEmail,setEmail] = useState('');
    const [getPassword,setPassword] = useState('');
    const [getError,setError] = useState('');

    const navigate = useNavigate();


    const onSubmitHandler=(e)=>{
        e.preventDefault();
        setError('');
        if(!getEmail || !getPassword){
            setError("email and password cannot be empty");
            return;
        }
        const user = JSON.parse(localStorage.getItem('user'));
        if(user && user.getEmail == getEmail && user.getPassword == getPassword){
            navigate('/home');
        }
        else{
            setError("email and password is invalid");
            return;  
        }
       
        
    }

    return (<>
     <h1>Login Page</h1>
     {getError && <h1>{getError}</h1>}
     <form>
        <div>
            Email:<input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            Password:<input type="password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
            <button onClick={onSubmitHandler}>Login</button>
        </div>
     </form>
    </>)
}
export default Login;