"use client"
import { useState } from 'react';
import UsersList from '../components/UsersList';
export default function Home() {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'Dave' }
    ];
    const [startingLetter, setStartingLetter] = useState('A');
      const [num, setNum] = useState(5);
  return (
    <div>
        <h1>Welcome to Next.js!</h1>
        <section>
                <h2>Filter Users</h2>
                <label>Starting Letter: 
                    <input 
                        type="text" 
                        value={startingLetter} 
                        onChange={e => setStartingLetter(e.target.value)} 
                        maxLength="1" 
                    />
                </label> 
                <UsersList users={users} startingLetter={startingLetter} />
            </section>
    </div>
);
}
