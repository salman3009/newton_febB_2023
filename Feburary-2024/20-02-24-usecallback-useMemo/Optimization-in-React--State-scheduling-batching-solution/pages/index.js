import { useState, useMemo } from "react";

const isPrimeNumber = (n) => {
  console.log("Expensive calculation execution for prime");
  let num = n;
  if (num === 0 || num === 1) {
    return false;
  }
  n--;
  while (n > 1) {
    if (num % n === 0) {
      return false;
    }
    n--;
  }
  return true;
};

const isArmstrongNumber = (number) => {
  console.log("Expensive calculation execution for Armstrong");
  const numberOfDigits = `${number}`.length;
  let sum = 0;
  let temp = number;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10);
  }
  return sum === number;
};

export default function Home() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const isArmstrong = useMemo(()=>isArmstrongNumber(num1),[num1]);
  const isPrime = useMemo(()=>isPrimeNumber(num2),[num2]);
  
  return (
    <>
      <div className="App">
        <h2>Armstrong Checker</h2>
        <br />
        <input
          id="input-1"
          value={num1}
          onChange={(e) => setNum1(+e.target.value)}
        />
        <h2 id="answer-1">
          {num1
            ? isArmstrong
              ? `${num1} is armstrong`
              : `${num1} is not armstrong`
            : `Please Enter Number `}
        </h2>
        ----------------------------------------------
        <br />
        <h2>Prime Checker</h2>
        <br />
        <input
          id="input-2"
          value={num2}
          onChange={(e) => setNum2(+e.target.value)}
        />
        <h2 id="answer-2">
          {num2
            ? isPrime
              ? `${num2} is Prime`
              : `${num2} is not Prime`
            : `Please Enter Number `}
        </h2>
      </div>
    </>
  );
}
