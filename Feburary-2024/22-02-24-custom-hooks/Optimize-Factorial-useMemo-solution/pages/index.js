"use client"
import { useState } from 'react';
import FactorialComponent from '../components/FactorialComponent';
export default function Home() {
  
  const [num,setNum] = useState(5);
     
  return (
    <div>
        <h1>Welcome to Next.js!</h1>
        <section>
                <h2>Factorial Calculation</h2>
                <input 
                    type="number" 
                    onChange={(e)=>setNum(e.target.value)}
                    value={num}/>
       
                <FactorialComponent num={num} />
            </section>
    </div>
);
}
