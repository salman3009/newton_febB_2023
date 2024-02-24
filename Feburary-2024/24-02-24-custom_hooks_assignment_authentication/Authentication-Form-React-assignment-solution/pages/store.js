import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function Store() {

  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loginStatus');
    if (isLoggedIn != 'true') {
      router.push('/login');
    }
  }, [])

  const logoutHandler = () => {
    localStorage.setItem('loginStatus', 'false');
    router.push('/login');

  }
  return (
    <div className='store'>
      <h2>Welcome to the store!</h2>
      <button className='logout-btn' onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default Store;
