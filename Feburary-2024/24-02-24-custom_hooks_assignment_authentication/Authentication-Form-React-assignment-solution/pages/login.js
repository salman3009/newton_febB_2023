'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <div className='login'>
      <h2>Login</h2>
      <form>
        <p className='error-para'>"Email or password is invalid"</p>
        <div className='email-div'>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' />
        </div>
        <div className='password-div'>
          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' />
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
