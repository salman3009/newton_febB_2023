
function factorial(n){
    console.log("factorial",n);
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
}

function FactorialComponent({num}){
    let result = factorial(num);
    return (<div>
       <h1>Factorial is: {result}</h1>
    </div>)
}

export default FactorialComponent;