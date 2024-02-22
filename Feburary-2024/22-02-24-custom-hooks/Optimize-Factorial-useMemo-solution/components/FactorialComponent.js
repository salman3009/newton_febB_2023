

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export default function FactorialComponent() {


  return <div className='result'>The factorial of {} is {}</div>;
}

