import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Register(){

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
        localStorage.setItem('user',JSON.stringify({getEmail,getPassword}));
        navigate('/login');
    }

    return (<>
     <h1>Register</h1>
     {getError && <h1>{getError}</h1>}
     <form>
        <div>
            Email:<input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            Password:<input type="password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
            <button onClick={onSubmitHandler}>Register</button>
        </div>
     </form>
    </>)
}
export default Register;