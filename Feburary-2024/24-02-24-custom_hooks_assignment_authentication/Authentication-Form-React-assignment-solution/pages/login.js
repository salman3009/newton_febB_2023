'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);


  const router = useRouter();


  const handleSubmit=(e)=>{
     e.preventDefault();
     if(!email || !password){
      setError(true);
     }
     else{
      const user = JSON.parse(localStorage.getItem('user'));
      if(user && user.email == email && user.password == password){
        localStorage.setItem('loginStatus','true');
        router.push('/store');
      }
      else{
        setError(true);
      }
     
     }
  }

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error &&<p className='error-para'>"Email or password is invalid"</p>}
        <div className='email-div'>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className='password-div'>
          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type='submit' className='login-btn'>
          Log In
        </button>
      </form>
      <div>
        Don't have an account?
        <Link href=''>
          <button className='register-link'>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
